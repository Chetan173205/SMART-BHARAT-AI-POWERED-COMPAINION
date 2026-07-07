import React from 'react';
import { translations } from '../data/i18n';

/**
 * Sidebar component that manages main navigation, theme toggles,
 * and primary/secondary language selectors.
 */
export default function Sidebar({
  lang,
  setLang,
  theme,
  setTheme,
  activeTab,
  setActiveTab,
  mobileOpen,
  setMobileOpen
}) {
  const t = translations[lang] || translations["en"];

  // 21 scheduled languages (excluding Hindi which is a primary button)
  const scheduledLanguages = [
    { code: "as", name: "Assamese / অসমীয়া" },
    { code: "bn", name: "Bengali / বাংলা" },
    { code: "brx", name: "Bodo / बर'" },
    { code: "doi", name: "Dogri / डोगरी" },
    { code: "gu", name: "Gujarati / ગુજરાતી" },
    { code: "kn", name: "Kannada / ಕನ್ನಡ" },
    { code: "ks", name: "Kashmiri / كश्मीरी" },
    { code: "kok", name: "Konkani / कोंकणी" },
    { code: "mai", name: "Maithili / मैथिली" },
    { code: "ml", name: "Malayalam / മലയാളം" },
    { code: "mni", name: "Manipuri / মৈতৈলোন" },
    { code: "mr", name: "Marathi / मराठी" },
    { code: "ne", name: "Nepali / नेपाली" },
    { code: "or", name: "Odia / ଓଡ଼ିଆ" },
    { code: "pa", name: "Punjabi / ਪੰਜਾਬੀ" },
    { code: "sa", name: "Sanskrit / संस्कृतम्" },
    { code: "sat", name: "Santali / सांताली" },
    { code: "sd", name: "Sindhi / سنڌي" },
    { code: "ta", name: "Tamil / தமிழ்" },
    { code: "te", name: "Telugu / తెలుగు" },
    { code: "ur", name: "Urdu / اردو" }
  ];

  const handleSecondaryLanguageChange = (e) => {
    const selectedCode = e.target.value;
    if (selectedCode) {
      setLang(selectedCode);
    }
  };

  const menuItems = [
    { id: 'home', label: t.navHome, icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    )},
    { id: 'chat', label: t.navChat, icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )},
    { id: 'schemes', label: t.navSchemes, icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )},
    { id: 'report', label: t.navReport, icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )},
    { id: 'culture', label: t.navCulture, icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )},
    { id: 'docs', label: t.navDocs, icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="20" height="20">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )}
  ];

  // If the active language is one of the secondary codes, the select dropdown shows it, otherwise ""
  const selectValue = (!['en', 'hi'].includes(lang)) ? lang : "";

  return (
    <>
      <div className={`sidebar ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="brand">
          <div className="brand-title">
            <span style={{ color: 'var(--saffron)' }}>स्वदेश</span>
            <span style={{ color: 'var(--white)' }}>Bharat</span>
          </div>
          <div className="brand-tagline">{t.subtitle}</div>
          <div className="gemini-badge" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.62rem',
            fontWeight: '700',
            color: 'var(--saffron)',
            background: 'rgba(255, 153, 51, 0.08)',
            border: '1px solid rgba(255, 153, 51, 0.2)',
            borderRadius: '12px',
            padding: '3px 8px',
            marginTop: '8px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/>
            </svg>
            <span>Gemini 3.5 Flash AI</span>
          </div>

          {/* Theme Switcher added to the top */}
          <button
            className="theme-toggle-btn"
            onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
            aria-label="Toggle App Theme"
            style={{
              marginTop: '16px',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '10px 14px',
              borderRadius: '10px',
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'var(--white)',
              fontSize: '0.85rem',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {theme === 'light' ? (
              <>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                <span>Dark Theme / डार्क थीम</span>
              </>
            ) : (
              <>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
                </svg>
                <span>Light Theme / लाइट थीम</span>
              </>
            )}
          </button>
        </div>

        {/* Menu Navigation */}
        <ul className="nav-links">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => {
                setActiveTab(item.id);
                setMobileOpen(false);
              }}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>

        {/* Footer controls */}
        <div className="sidebar-footer">
          {/* Main Language Toggle */}
          <div className="control-group">
            <span className="control-label">Primary Lang / मुख्य भाषा</span>
            <div className="selector-btn-group">
              <button
                className={`selector-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
              <button
                className={`selector-btn ${lang === 'hi' ? 'active' : ''}`}
                onClick={() => setLang('hi')}
              >
                हिं
              </button>
            </div>
          </div>

          {/* Secondary Scheduled Languages Selection */}
          <div className="control-group" style={{ marginBottom: 0 }}>
            <label htmlFor="scheduled-lang-select" className="control-label">
              More Languages / अन्य भाषाएं
            </label>
            <select
              id="scheduled-lang-select"
              value={selectValue}
              onChange={handleSecondaryLanguageChange}
              aria-label="Select secondary regional language"
              style={{
                width: '100%',
                padding: '8px 10px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                color: 'var(--white)',
                fontSize: '0.82rem',
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              <option value="" style={{ color: '#000' }}>-- Choose Language --</option>
              {scheduledLanguages.map((langObj) => (
                <option key={langObj.code} value={langObj.code} style={{ color: '#000' }}>
                  {langObj.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
