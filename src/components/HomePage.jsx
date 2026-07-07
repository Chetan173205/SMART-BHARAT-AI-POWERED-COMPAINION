import React from 'react';
import { translations } from '../data/i18n';

export default function HomePage({ lang, setActiveTab }) {
  const t = translations[lang];
  const [showAboutModal, setShowAboutModal] = React.useState(false);

  return (
    <div className="homepage-container">
      {/* Hero Section with Parallax SVGs */}
      <div className="hero">
        {/* Parallax SVG Backdrop */}
        <div className="hero-backdrop">
          <div className="hero-drift-elements">
            {/* Monument Set 1 */}
            <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-end' }}>
              {/* Taj Mahal */}
              <svg width="200" height="200" viewBox="0 0 200 200" style={{ color: 'var(--text-main)' }}>
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M70 120 C70 95, 80 80, 100 80 C120 80, 130 95, 130 120" />
                  <path d="M20 180 V80 M15 80 H25 M17 120 H23 M17 150 H23" />
                  <path d="M180 180 V80 M175 80 H185 M177 120 H183 M177 150 H183" />
                  <path d="M100 80 V70" />
                  <path d="M30 180 V120 H170 V180 M30 120 C30 120, 50 110, 70 120 M130 120 C130 120, 150 110, 170 120" />
                  <path d="M80 180 V140 Q100 125 120 140 V180" />
                  <path d="M45 120 C45 105, 50 100, 60 100 C70 100, 75 105, 75 120" />
                  <path d="M125 120 C125 105, 130 100, 140 100 C150 100, 155 105, 155 120" />
                </g>
              </svg>

              {/* Peacock */}
              <svg width="180" height="180" viewBox="0 0 120 200" style={{ color: 'var(--text-main)' }}>
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M40 120 C40 80, 60 70, 70 80 C80 90, 70 120, 50 140 C30 160, 20 180, 30 180 H80" />
                  <circle cx="65" cy="80" r="2" />
                  <path d="M63 75 Q65 65 72 70 M63 75 Q60 65 65 68" />
                  <path d="M20 180 Q0 130 30 100 Q60 70 90 90 Q120 110 110 150 Q100 190 20 180" />
                  <path d="M35 150 Q20 120 40 110 M45 160 Q30 130 50 120 M55 170 Q40 140 60 130" />
                </g>
              </svg>

              {/* India Gate */}
              <svg width="180" height="180" viewBox="0 0 100 200" style={{ color: 'var(--text-main)' }}>
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 180 V100 H80 V180 M20 90 H80 M30 75 H70 M30 75 V60 H70 V75 M10 110 H90 M10 130 H90" />
                  <path d="M35 180 V130 Q50 110 65 130 V180" />
                  <path d="M40 82 H60" />
                </g>
              </svg>
            </div>

            {/* Monument Set 2 (Duplicated for scrolling continuity) */}
            <div style={{ display: 'flex', gap: '80px', alignItems: 'flex-end' }}>
              <svg width="200" height="200" viewBox="0 0 200 200" style={{ color: 'var(--text-main)' }}>
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M70 120 C70 95, 80 80, 100 80 C120 80, 130 95, 130 120" />
                  <path d="M20 180 V80 M15 80 H25 M17 120 H23 M17 150 H23" />
                  <path d="M180 180 V80 M175 80 H185 M177 120 H183 M177 150 H183" />
                  <path d="M100 80 V70" />
                  <path d="M30 180 V120 H170 V180 M30 120 C30 120, 50 110, 70 120 M130 120 C130 120, 150 110, 170 120" />
                  <path d="M80 180 V140 Q100 125 120 140 V180" />
                  <path d="M45 120 C45 105, 50 100, 60 100 C70 100, 75 105, 75 120" />
                  <path d="M125 120 C125 105, 130 100, 140 100 C150 100, 155 105, 155 120" />
                </g>
              </svg>

              <svg width="180" height="180" viewBox="0 0 120 200" style={{ color: 'var(--text-main)' }}>
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M40 120 C40 80, 60 70, 70 80 C80 90, 70 120, 50 140 C30 160, 20 180, 30 180 H80" />
                  <circle cx="65" cy="80" r="2" />
                  <path d="M63 75 Q65 65 72 70 M63 75 Q60 65 65 68" />
                  <path d="M20 180 Q0 130 30 100 Q60 70 90 90 Q120 110 110 150 Q100 190 20 180" />
                  <path d="M35 150 Q20 120 40 110 M45 160 Q30 130 50 120 M55 170 Q40 140 60 130" />
                </g>
              </svg>

              <svg width="180" height="180" viewBox="0 0 100 200" style={{ color: 'var(--text-main)' }}>
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 180 V100 H80 V180 M20 90 H80 M30 75 H70 M30 75 V60 H70 V75 M10 110 H90 M10 130 H90" />
                  <path d="M35 180 V130 Q50 110 65 130 V180" />
                  <path d="M40 82 H60" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* Readability Overlay to pass contrast checks */}
        <div className="hero-overlay" />

        {/* Foreground Content */}
        <h1 style={{ position: 'relative', zIndex: 1 }}>{t.heroTitle}</h1>
        <p style={{ position: 'relative', zIndex: 1 }}>{t.heroSubtitle}</p>
        
        {/* Tricolor Indicator Line */}
        <div style={{
          display: 'flex',
          height: '6px',
          width: '180px',
          margin: '0 auto 16px',
          borderRadius: '3px',
          overflow: 'hidden',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ flex: 1, backgroundColor: 'var(--saffron)' }} />
          <div style={{ flex: 1, backgroundColor: 'var(--white)' }} />
          <div style={{ flex: 1, backgroundColor: 'var(--green)' }} />
        </div>

        {/* How It Works Trigger Button */}
        <button 
          onClick={() => setShowAboutModal(true)}
          style={{
            position: 'relative',
            zIndex: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'var(--text-main)',
            padding: '8px 20px',
            borderRadius: '20px',
            fontSize: '0.85rem',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '8px',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--saffron)'}
          onMouseOut={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)'}
        >
          ℹ️ {lang === 'hi' ? "यह कैसे काम करता है" : "How This Works"}
        </button>
      </div>

      {showAboutModal && (
        <div 
          className="modal-overlay" 
          onClick={() => setShowAboutModal(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(9, 14, 24, 0.6)',
            backdropFilter: 'blur(10px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <div 
            className="glass-card" 
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '540px',
              padding: '30px',
              borderRadius: '16px',
              borderTop: '6px solid var(--saffron)',
              boxShadow: 'var(--shadow-main)',
              position: 'relative'
            }}
          >
            <button 
              onClick={() => setShowAboutModal(false)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'transparent',
                border: 'none',
                color: 'var(--text-muted)',
                fontSize: '1.2rem',
                cursor: 'pointer'
              }}
              aria-label="Close modal"
            >
              ✕
            </button>

            <h3 style={{ fontSize: '1.4rem', color: 'var(--navy)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              🇮🇳 {lang === 'hi' ? "यह ऐप कैसे काम करता है" : "How Swadesh Bharat Works"}
            </h3>

            <div style={{ fontSize: '0.95rem', lineHeight: '1.6', color: 'var(--text-main)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <p>
                {lang === 'hi'
                  ? "स्वदेश भारत एक उन्नत नागरिक-केंद्रित मंच है जो भारतीय नागरिकों के लिए कल्याणकारी योजनाओं और सेवाओं की खोज को सरल करता है।"
                  : "Swadesh Bharat is an advanced civic companion platform designed to simplify how Indian citizens discover and access government benefits."}
              </p>
              <p>
                {lang === 'hi'
                  ? "यह ऐप कृत्रिम बुद्धिमत्ता (AI) का उपयोग करके उपयोगकर्ता की भाषा (22 अनुसूचित भारतीय भाषाओं सहित) में प्रश्नों को समझता है और त्वरित सहायता प्रदान करता है।"
                  : "Using Google Gemini AI, the app responds intelligently to citizen queries, explaining complex policies in plain language and supporting 22 scheduled regional Indian languages."}
              </p>
              <p>
                {lang === 'hi'
                  ? "स्कीम मैचिंग इंजन आपकी उम्र, आय और श्रेणी का विश्लेषण करके सही कल्याणकारी लाभों का सुझाव देता है, जिससे अपव्यय रुकता है।"
                  : "The profile-based Scheme Matcher filters benefits based on your state, category, age, and income to find welfare benefits you qualify for instantly."}
              </p>
              <p>
                {lang === 'hi'
                  ? "इसके अलावा, नागरिक स्थानीय बुनियादी ढांचे की समस्याओं (जैसे बंद सड़क लाइट) की रिपोर्ट कर सकते हैं, शिकायत का पत्र प्रिंट कर सकते हैं और सीधे अधिकारियों को ईमेल कर सकते हैं।"
                  : "Citizens can report local infrastructural grievances, preview and print standard official complaints, or draft emails to municipal authorities directly."}
              </p>
            </div>

            <button 
              className="btn-primary" 
              onClick={() => setShowAboutModal(false)}
              style={{ marginTop: '24px', width: '100%' }}
            >
              {lang === 'hi' ? "समझ गया" : "Got it"}
            </button>
          </div>
        </div>
      )}

      {/* Impact Stats Grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-value">18+</div>
          <div className="stat-label">{t.statSchemes}</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">36</div>
          <div className="stat-label">{t.statStates}</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">Instant</div>
          <div className="stat-label">{t.statResponse}</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">1,248+</div>
          <div className="stat-label">{t.statUsers}</div>
        </div>
      </div>

      {/* Services Grid */}
      <h2 className="services-title">{t.quickAccess}</h2>
      <div className="services-grid">
        {/* Card 1: AI Chat */}
        <div className="glass-card service-card" onClick={() => setActiveTab('chat')}>
          <div className="service-icon">💬</div>
          <h3>{t.cardChatTitle}</h3>
          <p>{t.cardChatDesc}</p>
          <div className="service-arrow">
            Explore AI Assistant &rarr;
          </div>
        </div>

        {/* Card 2: Schemes */}
        <div className="glass-card service-card" onClick={() => setActiveTab('schemes')}>
          <div className="service-icon">🌾</div>
          <h3>{t.cardSchemesTitle}</h3>
          <p>{t.cardSchemesDesc}</p>
          <div className="service-arrow">
            Find Schemes &rarr;
          </div>
        </div>

        {/* Card 3: Report Issues */}
        <div className="glass-card service-card" onClick={() => setActiveTab('report')}>
          <div className="service-icon">⚠️</div>
          <h3>{t.cardReportTitle}</h3>
          <p>{t.cardReportDesc}</p>
          <div className="service-arrow">
            Report Issues &rarr;
          </div>
        </div>

        {/* Card 4: Culture Hub */}
        <div className="glass-card service-card" onClick={() => setActiveTab('culture')}>
          <div className="service-icon">🕌</div>
          <h3>{t.cardCultureTitle}</h3>
          <p>{t.cardCultureDesc}</p>
          <div className="service-arrow">
            Explore Culture &rarr;
          </div>
        </div>
      </div>
    </div>
  );
}
