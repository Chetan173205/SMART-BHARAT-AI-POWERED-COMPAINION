import React, { useState, useMemo } from 'react';
import { translations } from '../data/i18n';
import { documentChecklists } from '../data/documentChecklists';

export default function DocumentChecker({ lang }) {
  const t = translations[lang] || translations["en"];
  
  // States
  const [selectedDocId, setSelectedDocId] = useState("aadhaar");

  // Get active item
  const activeDoc = useMemo(() => {
    return documentChecklists.find(doc => doc.id === selectedDocId) || documentChecklists[0];
  }, [selectedDocId]);

  // Grouped list for the dropdown options
  const groupedCategories = useMemo(() => {
    const categories = {
      "Identity Documents": [],
      "Certificates": [],
      "Government Schemes": [],
      "Other Services": []
    };

    // Pre-populate grouped checklists
    documentChecklists.forEach(doc => {
      if (categories[doc.category]) {
        categories[doc.category].push(doc);
      }
    });

    return categories;
  }, []);

  // UI Localized labels
  const docLabels = useMemo(() => {
    return {
      title: lang === 'hi' ? "दस्तावेज़ आवश्यकताएँ चेकर" : "Document Requirements Checker",
      subtitle: lang === 'hi' ? "विभिन्न सरकारी सेवाओं के लिए आवश्यक दस्तावेजों और आवेदन प्रक्रियाओं की जाँच करें।" : "Verify necessary documents and application procedures for various civic/government services.",
      selectService: lang === 'hi' ? "एक सेवा का चयन करें:" : "Select a service:",
      requiredDocs: lang === 'hi' ? "आवश्यक दस्तावेज़" : "Required Documents",
      procedure: lang === 'hi' ? "आवेदन प्रक्रिया (चरण-दर-चरण)" : "Application Procedure (Step-by-step)"
    };
  }, [lang]);

  return (
    <div className="glass-card document-checker-container">
      <div className="form-title-group">
        <h2>{docLabels.title}</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{docLabels.subtitle}</p>
      </div>

      <div className="form-group" style={{ marginBottom: '24px', maxWidth: '400px' }}>
        <label htmlFor="doc-select-field">{docLabels.selectService}</label>
        <select
          id="doc-select-field"
          value={selectedDocId}
          onChange={(e) => setSelectedDocId(e.target.value)}
          aria-label="Select government service document checklist"
        >
          {Object.keys(groupedCategories).map((categoryName) => {
            const items = groupedCategories[categoryName];
            if (items.length === 0) return null;
            
            const categoryLabel = lang === 'hi' ? items[0].categoryHi : categoryName;

            return (
              <optgroup key={categoryName} label={categoryLabel}>
                {items.map((item) => (
                  <option key={item.id} value={item.id}>
                    {lang === 'hi' ? item.titleHi : item.title}
                  </option>
                ))}
              </optgroup>
            );
          })}
        </select>
      </div>

      {activeDoc && (
        <section 
          className="glass-card" 
          style={{ 
            transition: 'none', 
            borderTop: '4px solid var(--saffron)', 
            padding: '24px' 
          }}
          aria-labelledby="active-doc-heading"
        >
          {/* Translation Note for secondary languages */}
          {!['en', 'hi'].includes(lang) && (
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

          <h3 id="active-doc-heading" style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '20px' }}>
            📋 {lang === 'hi' ? activeDoc.titleHi : activeDoc.title}
          </h3>

          <div className="scheme-details-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', background: 'transparent', padding: 0 }}>
            {/* Required Documents Checklist */}
            <div style={{ backgroundColor: 'var(--bg-app)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
              <h4 style={{ color: 'var(--saffron)', fontSize: '1.05rem', marginBottom: '12px', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                📂 {docLabels.requiredDocs}
              </h4>
              <ul style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {(lang === 'hi' ? activeDoc.requiredDocsHi : activeDoc.requiredDocs).map((doc, idx) => (
                  <li key={idx}>{doc}</li>
                ))}
              </ul>
            </div>

            {/* Step-by-Step Procedure */}
            <div style={{ backgroundColor: 'var(--bg-app)', padding: '18px', borderRadius: '12px', border: '1px solid var(--border-card)' }}>
              <h4 style={{ color: 'var(--green)', fontSize: '1.05rem', marginBottom: '12px', borderBottom: '1px solid var(--border-card)', paddingBottom: '8px' }}>
                ⚙️ {docLabels.procedure}
              </h4>
              <ol style={{ paddingLeft: '20px', lineHeight: '1.6', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {(lang === 'hi' ? activeDoc.stepsHi : activeDoc.steps).map((step, idx) => (
                  <li key={idx}>{step}</li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
