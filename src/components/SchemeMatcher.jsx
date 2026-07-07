import React, { useState, useMemo } from 'react';
import { translations } from '../data/i18n';
import { schemes } from '../data/schemes';
import { sanitizeText } from '../utils/security';

export default function SchemeMatcher({ lang }) {
  const t = translations[lang] || translations["en"];

  // Form states
  const [age, setAge] = useState(25);
  const [income, setIncome] = useState(120000);
  const [occupation, setOccupation] = useState("Worker");
  const [gender, setGender] = useState("Female");
  const [state, setState] = useState("Maharashtra");
  const [casteCategory, setCasteCategory] = useState("General");
  
  const [hasChecked, setHasChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formError, setFormError] = useState(null);

  const occupationsList = useMemo(() => [
    { value: "Farmer", label: lang === 'hi' ? "किसान" : "Farmer" },
    { value: "Worker", label: lang === 'hi' ? "मजदूर / श्रमिक" : "Labourer / Worker" },
    { value: "Student", label: lang === 'hi' ? "छात्र" : "Student" },
    { value: "Housewife", label: lang === 'hi' ? "गृहणी" : "Housewife" },
    { value: "Entrepreneur", label: lang === 'hi' ? "उद्यमी / छोटा व्यवसाय" : "Entrepreneur / Business owner" },
    { value: "Unemployed", label: lang === 'hi' ? "बेरोजगार" : "Unemployed" }
  ], [lang]);

  // Full coverage: all 28 states + 8 Union Territories
  const statesList = useMemo(() => [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", 
    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", 
    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", 
    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", 
    "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Andaman and Nicobar Islands", "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", 
    "Delhi", "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
  ], []);

  // Compute matched schemes using useMemo to optimize calculation performance
  const matchedSchemes = useMemo(() => {
    if (!hasChecked) return [];

    return schemes.filter(scheme => {
      const rules = scheme.eligibility;

      // 1. Age Check
      if (age < rules.minAge || age > rules.maxAge) return false;

      // 2. Income Check
      if (rules.maxIncome !== null && income > rules.maxIncome) return false;

      // 3. Gender Check
      if (rules.gender !== "All" && gender !== rules.gender) return false;

      // 4. Occupation Check
      if (!rules.occupations.includes("All")) {
        const matchesOccupation = rules.occupations.some(occ => {
          return occ.toLowerCase() === occupation.toLowerCase() || 
                 (occupation === "Worker" && occ.toLowerCase() === "labourer");
        });
        if (!matchesOccupation) return false;
      }

      // 5. State Check
      if (!rules.states.includes("All")) {
        const matchesState = rules.states.some(s => s.toLowerCase() === state.toLowerCase());
        if (!matchesState) return false;
      }

      // 6. Caste Category Check
      if (rules.casteCategories && !rules.casteCategories.includes("All")) {
        const matchesCategory = rules.casteCategories.some(c => c.toLowerCase() === casteCategory.toLowerCase());
        if (!matchesCategory) return false;
      }

      return true;
    });
  }, [hasChecked, age, income, occupation, gender, state, casteCategory]);

  const handleMatchSchemes = (e) => {
    e.preventDefault();
    setFormError(null);

    const ageVal = parseInt(age);
    const incomeVal = parseInt(income);

    if (isNaN(ageVal) || ageVal < 0 || ageVal > 120) {
      setFormError(lang === 'hi' ? "कृपया 0 और 120 के बीच एक मान्य आयु दर्ज करें।" : "Please enter a valid age between 0 and 120.");
      return;
    }

    if (isNaN(incomeVal) || incomeVal < 0) {
      setFormError(lang === 'hi' ? "कृपया एक मान्य सकारात्मक आय दर्ज करें।" : "Please enter a valid positive annual income.");
      return;
    }

    setHasChecked(false);
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setHasChecked(true);
    }, 800);
  };

  const handleReset = () => {
    setAge(25);
    setIncome(120000);
    setOccupation("Worker");
    setGender("Female");
    setState("Maharashtra");
    setCasteCategory("General");
    setHasChecked(false);
    setIsLoading(false);
    setFormError(null);
  };

  return (
    <div className="glass-card">
      <div className="form-title-group">
        <h2>{t.schemeTitle}</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.schemeSubtitle}</p>
      </div>

      {/* Input Form */}
      <form onSubmit={handleMatchSchemes} aria-label="Eligibility matching form">
        {formError && (
          <div style={{ color: '#fc8181', fontSize: '0.9rem', fontWeight: '600', marginBottom: '16px' }} role="alert">
            ⚠️ {formError}
          </div>
        )}

        <div className="form-grid">
          {/* Age */}
          <div className="form-group">
            <label htmlFor="age-field">{t.labelAge}</label>
            <input
              id="age-field"
              type="number"
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value) || 0)}
              min="0"
              max="120"
              required
            />
          </div>

          {/* Income */}
          <div className="form-group">
            <label htmlFor="income-field">{t.labelIncome}</label>
            <input
              id="income-field"
              type="number"
              value={income}
              onChange={(e) => setIncome(parseInt(e.target.value) || 0)}
              min="0"
              step="5000"
              required
            />
          </div>

          {/* Occupation */}
          <div className="form-group">
            <label htmlFor="occupation-field">{t.labelOccupation}</label>
            <select
              id="occupation-field"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
            >
              {occupationsList.map((occ) => (
                <option key={occ.value} value={occ.value}>
                  {occ.label}
                </option>
              ))}
            </select>
          </div>

          {/* Gender */}
          <div className="form-group">
            <label htmlFor="gender-field">{t.labelGender}</label>
            <select
              id="gender-field"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="All">{lang === 'hi' ? "सभी / अन्य" : "All / Other"}</option>
              <option value="Female">{lang === 'hi' ? "महिला" : "Female"}</option>
              <option value="Male">{lang === 'hi' ? "पुरुष" : "Male"}</option>
            </select>
          </div>

          {/* Caste Category */}
          <div className="form-group">
            <label htmlFor="caste-category-field">{lang === 'hi' ? "श्रेणी (Caste Category)" : "Caste Category"}</label>
            <select
              id="caste-category-field"
              value={casteCategory}
              onChange={(e) => setCasteCategory(e.target.value)}
            >
              <option value="General">{lang === 'hi' ? "सामान्य (General)" : "General"}</option>
              <option value="OBC">{lang === 'hi' ? "अन्य पिछड़ा वर्ग (OBC)" : "OBC"}</option>
              <option value="SC">{lang === 'hi' ? "अनुसूचित जाति (SC)" : "SC"}</option>
              <option value="ST">{lang === 'hi' ? "अनुसूचित जनजाति (ST)" : "ST"}</option>
              <option value="EWS">{lang === 'hi' ? "आर्थिक रूप से कमजोर वर्ग (EWS)" : "EWS"}</option>
            </select>
          </div>

          {/* State Select */}
          <div className="form-group full-width">
            <label htmlFor="state-field">{t.labelState}</label>
            <select
              id="state-field"
              value={state}
              onChange={(e) => setState(e.target.value)}
            >
              {statesList.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="btn-primary">
            {t.btnFindSchemes}
          </button>
          <button type="button" className="btn-secondary" onClick={handleReset}>
            {t.btnReset}
          </button>
        </div>
      </form>

      {/* Matches List */}
      {isLoading && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div className="loading-spinner" style={{
            width: '40px',
            height: '40px',
            border: '4px solid rgba(255, 153, 51, 0.2)',
            borderTop: '4px solid var(--saffron)',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            margin: '0 auto 16px'
          }}></div>
          <p style={{ color: 'var(--text-muted)', fontWeight: '500' }}>
            {lang === 'hi' ? "आपकी पात्रता के अनुकूल योजनाओं की खोज की जा रही है..." : "Matching profile against 20+ welfare schemes..."}
          </p>
        </div>
      )}

      {hasChecked && !isLoading && (
        <section className="results-section" aria-labelledby="results-title-heading">
          <h3 id="results-title-heading" className="results-header">
            {t.eligibleTitle} ({matchedSchemes.length})
          </h3>

          {/* Translation Note for secondary languages */}
          {!['en', 'hi'].includes(lang) && matchedSchemes.length > 0 && (
            <div 
              style={{
                fontSize: '0.8rem',
                color: 'var(--saffron)',
                backgroundColor: 'rgba(255, 153, 51, 0.08)',
                padding: '10px 14px',
                borderRadius: '8px',
                marginBottom: '16px',
                border: '1px solid rgba(255, 153, 51, 0.2)',
                fontWeight: '500'
              }}
              role="note"
            >
              ℹ️ {t.transNote}
            </div>
          )}

          {matchedSchemes.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 20px',
              border: '1px dashed var(--border-card)',
              borderRadius: '12px',
              background: 'var(--bg-card)',
              marginTop: '12px'
            }}>
              <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>🔍</span>
              <p style={{ color: 'var(--text-main)', fontWeight: '600', marginBottom: '6px' }}>
                {lang === 'hi' ? "कोई योजना नहीं मिली" : "No schemes match your profile"}
              </p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px', margin: '0 auto' }}>
                {lang === 'hi' ? "कृपया अधिक परिणाम प्राप्त करने के लिए अपने फ़िल्टर (जैसे आयु, आय या श्रेणी) को समायोजित करें।" : "No schemes match your profile — try adjusting your filters (e.g. changing age, income, or category)."}
              </p>
            </div>
          ) : (
            <div className="schemes-list" role="feed" aria-busy="false">
              {matchedSchemes.map((scheme) => (
                <article
                  key={scheme.id}
                  className={`glass-card scheme-card ${scheme.category.toLowerCase()}`}
                  style={{ transition: 'none' }}
                  aria-label={`${lang === 'hi' ? scheme.nameHi : scheme.name} in category ${scheme.category}`}
                >
                  <div className="scheme-card-header">
                    <h4 style={{ fontSize: '1.2rem', color: 'var(--navy)' }}>
                      {lang === 'hi' ? scheme.nameHi : scheme.name}
                    </h4>
                    <span className="scheme-badge">
                      {lang === 'hi' ? scheme.categoryHi : scheme.category}
                    </span>
                  </div>
                  
                  <div className="scheme-card-body">
                    <p style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {lang === 'hi' ? scheme.descriptionHi : scheme.description}
                    </p>
                    
                    <div className="scheme-details-grid">
                      <div>
                        <strong>{t.schemeBenefits}</strong>
                        <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                          {lang === 'hi' ? scheme.benefitsHi : scheme.benefits}
                        </p>
                      </div>
                      <div>
                        <strong>{t.schemeCriteria}</strong>
                        <p style={{ fontSize: '0.85rem', marginTop: '4px' }}>
                          {lang === 'hi' ? scheme.criteriaTextHi : scheme.criteriaText}
                        </p>
                      </div>
                    </div>

                    <a
                      href={scheme.applyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-success"
                      style={{
                        alignSelf: 'flex-start',
                        padding: '8px 16px',
                        fontSize: '0.85rem',
                        marginTop: '8px',
                        textAlign: 'center',
                        color: 'var(--white)'
                      }}
                      aria-label={`${lang === 'hi' ? 'आधिकारिक तौर पर आवेदन करें' : 'Apply officially'} to ${lang === 'hi' ? scheme.nameHi : scheme.name}`}
                    >
                      {t.schemeApply} &rarr;
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
