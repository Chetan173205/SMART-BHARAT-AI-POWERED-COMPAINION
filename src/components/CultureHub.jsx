import React, { useState } from 'react';
import { translations } from '../data/i18n';
import { statesCulture } from '../data/statesCulture';

// Helper component to render a subtle vector silhouette for the state's landmark
function LandmarkVector({ type }) {
  const drawLandmark = () => {
    switch (type) {
      case 'taj':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M70 120 C70 95, 80 80, 100 80 C120 80, 130 95, 130 120" />
            <path d="M20 180 V80 M15 80 H25" />
            <path d="M180 180 V80 M175 80 H185" />
            <path d="M100 80 V70" />
            <path d="M30 180 V120 H170 V180" />
            <path d="M80 180 V145 Q100 130 120 145 V180" />
            <path d="M45 120 C45 105, 50 100, 60 100 C70 100, 75 105, 75 120" />
            <path d="M125 120 C125 105, 130 100, 140 100 C150 100, 155 105, 155 120" />
          </g>
        );
      case 'india_gate':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M40 180 V80 H120 V180" />
            <path d="M30 70 H130 M50 55 H110 V70" />
            <path d="M60 180 V120 Q80 105 100 120 V180" />
            <path d="M40 100 H120 M40 130 H120" />
          </g>
        );
      case 'gateway':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M30 180 V80 H170 V180" />
            <path d="M50 80 Q100 50 150 80" />
            <path d="M70 180 V110 Q100 95 130 110 V180" />
            <circle cx="50" cy="100" r="10" />
            <circle cx="150" cy="100" r="10" />
          </g>
        );
      case 'temple':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M40 180 L70 50 H90 L120 180 Z" />
            <path d="M50 140 H110 M55 110 H105 M60 80 H100" />
            <path d="M75 50 V35 H85 V50" />
            <circle cx="80" cy="30" r="4" />
          </g>
        );
      case 'howrah':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M10 150 H190" />
            <path d="M30 150 V60 L50 80 H150 L170 60 V150" />
            <path d="M30 60 C30 60, 100 120, 170 60" />
            <path d="M30 80 Q100 150 170 80" />
            <path d="M60 150 V105 M90 150 V112 M120 150 V112 M150 150 V105" />
          </g>
        );
      case 'golden_temple':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M30 180 H170 V140 H30 Z" />
            <path d="M60 140 Q100 100 140 140" />
            <path d="M80 110 C80 90, 90 80, 100 80 C110 80, 120 90, 120 110 Z" />
            <path d="M100 80 V60" />
            <path d="M10 180 Q100 200 190 180" />
          </g>
        );
      case 'hawa_mahal':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M40 180 V60 H120 V180" />
            <path d="M40 90 H120 M40 120 H120 M40 150 H120" />
            <path d="M50 75 Q60 60 70 75 M90 75 Q100 60 110 75" />
            <path d="M50 105 Q60 90 70 105 M90 105 Q100 90 110 105" />
            <path d="M50 135 Q60 120 70 135 M90 135 Q100 120 110 135" />
          </g>
        );
      case 'boat':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M10 150 Q100 180 190 150 L170 130 H30 Z" />
            <path d="M50 130 V100 H130 V130" />
            <path d="M50 100 Q90 80 130 100" />
            <path d="M20 150 L5 120 M180 150 L195 125" />
          </g>
        );
      case 'statue':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M90 180 L95 80 L85 45 C85 45, 100 30, 110 45 L100 80 L105 180" />
            <path d="M88 48 H108 M82 85 H112 M90 120 H105" />
            <path d="M70 180 H125" />
          </g>
        );
      case 'chariot':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M40 160 H120 V100 H40 Z" />
            <circle cx="55" cy="170" r="12" />
            <circle cx="105" cy="170" r="12" />
            <path d="M60 100 L80 60 L100 100 Z" />
            <path d="M80 60 V40" />
          </g>
        );
      case 'stupatree':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M50 180 C50 110, 150 110, 150 180 Z" />
            <path d="M80 120 V90 H120 V120" />
            <path d="M100 90 V60" />
            <circle cx="100" cy="50" r="8" />
          </g>
        );
      case 'monastery':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M40 180 V100 H120 V180" />
            <path d="M30 100 L80 60 L130 100 Z" />
            <path d="M55 130 H70 V150 H55 Z M90 130 H105 V150 H90 Z" />
            <path d="M72 60 V40 H88 V60" />
          </g>
        );
      case 'waterfall':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M10 80 Q100 90 190 80" />
            <path d="M30 83 V180 M60 85 V175 M90 86 V180 M120 85 V170 M150 84 V180 M170 82 V175" strokeDasharray="4 4" />
            <path d="M10 180 Q100 190 190 180" />
          </g>
        );
      case 'root_bridge':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M10 120 C40 100, 70 150, 100 120 C130 90, 160 140, 190 120" strokeWidth="3" />
            <path d="M10 140 C50 130, 90 160, 130 130 C160 110, 180 150, 190 145" strokeWidth="2" />
            <path d="M40 115 V135 M80 128 V146 M120 122 V132 M160 124 V142" />
          </g>
        );
      case 'church':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M50 180 V80 H110 V180" />
            <path d="M80 80 V50 M65 65 H95" />
            <path d="M70 180 V130 H90 V180" />
            <circle cx="80" cy="105" r="8" />
          </g>
        );
      case 'auroville':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <circle cx="100" cy="110" r="50" />
            <path d="M70 150 C70 150, 100 130, 130 150" />
            <path d="M100 60 V30 M100 30 L90 40 M100 30 L110 40" />
          </g>
        );
      case 'rock_garden':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M30 180 Q50 120 80 150 Q110 110 140 160 Q160 130 180 180" strokeWidth="2" />
            <circle cx="50" cy="110" r="10" />
            <circle cx="120" cy="100" r="8" />
          </g>
        );
      case 'wheel':
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <circle cx="100" cy="110" r="45" />
            <circle cx="100" cy="110" r="8" />
            <line x1="100" y1="65" x2="100" y2="155" />
            <line x1="55" y1="110" x2="145" y2="110" />
            <line x1="68" y1="78" x2="132" y2="142" />
            <line x1="68" y1="142" x2="132" y2="78" />
          </g>
        );
      case 'hills':
      default:
        return (
          <g stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M10 180 L50 80 L100 150 L140 90 L190 180 Z" />
            <path d="M40 100 L50 105 L60 98" />
            <path d="M130 105 L140 112 L150 102" />
          </g>
        );
    }
  };

  return (
    <svg 
      className="culture-landmark-vector" 
      viewBox="0 0 200 200" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {drawLandmark()}
    </svg>
  );
}

export default function CultureHub({ lang }) {
  const t = translations[lang] || translations["en"];

  // Default to Maharashtra
  const [selectedStateId, setSelectedStateId] = useState("maharashtra");
  const [toastText, setToastText] = useState(null);

  const currentState = statesCulture.find(s => s.id === selectedStateId) || statesCulture[0];

  const handleSpeakPhrase = (phraseText, stateName) => {
    setToastText(`${t.phraseSpeechSim} ${stateName} - "${phraseText}"`);
    setTimeout(() => setToastText(null), 3500);

    // Browser Text-To-Speech
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(phraseText.split('(')[0].trim());
      const voices = window.speechSynthesis.getVoices();
      const inVoice = voices.find(v => v.lang.includes('IN') || v.lang.includes('hi') || v.lang.includes('mr'));
      if (inVoice) {
        utterance.voice = inVoice;
      }
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="culture-hub-container">
      {/* Toast Notification */}
      {toastText && (
        <div className="simulated-notification">
          🔊 {toastText}
        </div>
      )}

      {/* Selector Container */}
      <div className="glass-card">
        <div className="form-title-group">
          <h2>{t.cultureTitle}</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{t.cultureSubtitle}</p>
        </div>

        <p style={{ fontWeight: '600', fontSize: '0.9rem', marginBottom: '12px' }}>
          📌 {t.selectStatePrompt} ({statesCulture.length} States/UTs):
        </p>
        
        {/* Scrollable Select Grid of all 36 States/UTs */}
        <div className="state-grid">
          {statesCulture.map((s) => (
            <button
              key={s.id}
              className={`state-grid-btn ${selectedStateId === s.id ? 'active' : ''}`}
              onClick={() => setSelectedStateId(s.id)}
            >
              {lang === 'hi' ? s.nameHi : s.name}
            </button>
          ))}
        </div>

        {/* State Cultural Details Card */}
        <div className="glass-card culture-details-card" style={{ transition: 'none' }}>
          {/* Subtle Vector Landmark Silhouette Watermark Overlay */}
          <LandmarkVector type={currentState.landmark} />

          {/* Translation warning note for secondary languages */}
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

          <div className="culture-header-title">
            🕌 {lang === 'hi' ? currentState.nameHi : currentState.name}
            <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 'normal' }}>
              ({t.capital}: {lang === 'hi' ? currentState.capitalHi : currentState.capital})
            </span>
          </div>

          <div className="culture-card-grid">
            {/* Language */}
            <div className="culture-item">
              <span className="culture-item-label">{t.language}</span>
              <span className="culture-item-value">
                {lang === 'hi' ? currentState.languageHi : currentState.language}
              </span>
            </div>

            {/* Festival */}
            <div className="culture-item">
              <span className="culture-item-label">{t.festival}</span>
              <span className="culture-item-value">
                {lang === 'hi' ? currentState.festivalHi : currentState.festival}
              </span>
            </div>

            {/* Famous Dish */}
            <div className="culture-item">
              <span className="culture-item-label">{t.dish}</span>
              <span className="culture-item-value">
                {lang === 'hi' ? currentState.famousDishHi : currentState.famousDish}
              </span>
            </div>

            {/* Tourist Spots */}
            <div className="culture-item">
              <span className="culture-item-label">{t.touristSpots}</span>
              <span className="culture-item-value" style={{ fontWeight: '500', fontSize: '0.9rem', lineHeight: '1.4' }}>
                {currentState.touristPlaces.join(', ')}
              </span>
            </div>

            {/* Heritage Sites */}
            <div className="culture-item" style={{ gridColumn: 'span 1' }}>
              <span className="culture-item-label">{t.heritage}</span>
              <span className="culture-item-value" style={{ fontWeight: '500', fontSize: '0.9rem', lineHeight: '1.4' }}>
                {lang === 'hi' ? currentState.heritageHi : currentState.heritage}
              </span>
            </div>

            {/* Expression Box */}
            <div className="culture-item expression-box" style={{ gridColumn: 'span 1', gap: '8px' }}>
              <span className="culture-item-label" style={{ color: 'var(--saffron)' }}>{t.expression}</span>
              <div className="expression-text">
                {lang === 'hi' ? currentState.phraseHi : currentState.phrase}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                <strong>{t.meaning}:</strong> {lang === 'hi' ? currentState.phraseMeaningHi : currentState.phraseMeaning}
              </div>
              
              <button
                className="expression-btn"
                onClick={() => handleSpeakPhrase(
                  lang === 'hi' ? currentState.phraseHi : currentState.phrase,
                  lang === 'hi' ? currentState.nameHi : currentState.name
                )}
              >
                🔊 {t.phraseListen}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
