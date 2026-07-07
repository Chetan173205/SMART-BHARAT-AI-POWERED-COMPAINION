/**
 * SMART BHARAT - AI-POWERED CIVIC COMPANION
 * 
 * Hackathon Problem Statement Mappings:
 * 1. GOVERNMENT SERVICES: Checked and mapped via [SchemeMatcher.jsx](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/components/SchemeMatcher.jsx)
 *    Provides citizens profile-based matching with central and state-specific welfare benefits.
 * 2. ISSUE REPORTING & CIVIC ENGAGEMENT: Handled in [CivicReporter.jsx](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/components/CivicReporter.jsx)
 *    Enables reporting local infrastructure errors, local upload preview, and petition printing.
 * 3. PERSONALIZED ASSISTANCE: Implemented in [BharatChat.jsx](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/components/BharatChat.jsx)
 *    Simulated keyword chatbot assistant representing direct support for queries.
 * 4. MULTILINGUAL SUPPORT: Administered dynamically via [i18n.js](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/data/i18n.js) and [Sidebar.jsx](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/components/Sidebar.jsx)
 *    Translates UI strings to English and Hindi and provides picker hooks for 22 scheduled languages.
 * 5. TRANSPARENCY, ACCESSIBILITY, DIGITAL INCLUSION: Driven in [CultureHub.jsx](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/components/CultureHub.jsx) and [index.css](file:///c:/Users/ckkso/Antigravity/SMART-BHARAT-AI-POWERED-COMPAINION/src/index.css)
 *    Incorporates browser level text-to-speech audio simulator, keyboard tab-focus states, WCAG contrast levels, and prefers-reduced-motion triggers.
 * 6. DOCUMENT REQUIREMENTS CHECKER: DocumentChecker.jsx
 *    Lists necessary paperwork and workflow lists for 20+ civic services.
 */

import React, { useState, useEffect, Suspense, useMemo, useCallback } from 'react';
import Sidebar from './components/Sidebar';
import { translations } from './data/i18n';
import NotFoundPage from './components/NotFoundPage';

// Lazy loading route components for enhanced performance/efficiency
const HomePage = React.lazy(() => import('./components/HomePage'));
const BharatChat = React.lazy(() => import('./components/BharatChat'));
const SchemeMatcher = React.lazy(() => import('./components/SchemeMatcher'));
const CivicReporter = React.lazy(() => import('./components/CivicReporter'));
const CultureHub = React.lazy(() => import('./components/CultureHub'));
const DocumentChecker = React.lazy(() => import('./components/DocumentChecker'));

function App() {
  // Application State
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('light');
  const [activeTab, setActiveTab] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  // Authenticated User Global State
  const [user, setUser] = useState(null);

  // User-keyed persistence structures
  const [userChatMap, setUserChatMap] = useState({});
  const [userGrievanceMap, setUserGrievanceMap] = useState({});

  // Sync theme attribute to HTML element for CSS variables to apply
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Memoize active translation object to avoid re-renders
  const t = useMemo(() => translations[lang], [lang]);
  const currentUserKey = user ? user.email : "anonymous";

  // Get active messages slice (memoized based on user and chat mappings)
  const currentMessages = useMemo(() => {
    return userChatMap[currentUserKey] || [
      {
        id: "welcome",
        sender: "bot",
        text: t.chatWelcome,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ];
  }, [userChatMap, currentUserKey, t.chatWelcome]);

  // Callback to set messages for current user
  const setMessages = useCallback((newValOrFn) => {
    setUserChatMap(prev => {
      const current = prev[currentUserKey] || [
        {
          id: "welcome",
          sender: "bot",
          text: t.chatWelcome,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ];
      const updated = typeof newValOrFn === 'function' ? newValOrFn(current) : newValOrFn;
      return { ...prev, [currentUserKey]: updated };
    });
  }, [currentUserKey, t.chatWelcome]);

  // Get active grievances slice (memoized)
  const currentComplaints = useMemo(() => {
    return userGrievanceMap[currentUserKey] || [
      {
        id: "SB-2026-1042",
        date: "04 Jul 2026",
        category: lang === 'hi' ? "स्ट्रीटलाइट विफलता" : "Streetlight Failure",
        location: "Sector 15, Near Community Center",
        status: "resolved"
      },
      {
        id: "SB-2026-1189",
        date: "06 Jul 2026",
        category: lang === 'hi' ? "सड़कें और गड्ढे" : "Roads & Potholes",
        location: "Link Road Crossroad, Ward 4",
        status: "assigned"
      }
    ];
  }, [userGrievanceMap, currentUserKey, lang]);

  // Callback to set complaints for current user
  const setComplaints = useCallback((newValOrFn) => {
    setUserGrievanceMap(prev => {
      const current = prev[currentUserKey] || [
        {
          id: "SB-2026-1042",
          date: "04 Jul 2026",
          category: lang === 'hi' ? "स्ट्रीटलाइट विफलता" : "Streetlight Failure",
          location: "Sector 15, Near Community Center",
          status: "resolved"
        },
        {
          id: "SB-2026-1189",
          date: "06 Jul 2026",
          category: lang === 'hi' ? "सड़कें और गड्ढे" : "Roads & Potholes",
          location: "Link Road Crossroad, Ward 4",
          status: "assigned"
        }
      ];
      const updated = typeof newValOrFn === 'function' ? newValOrFn(current) : newValOrFn;
      return { ...prev, [currentUserKey]: updated };
    });
  }, [currentUserKey]);

  // Render view conditionally based on active tab
  const renderContent = () => {
    const validTabs = ['home', 'chat', 'schemes', 'report', 'culture', 'docs'];
    if (!validTabs.includes(activeTab)) {
      return <NotFoundPage setActiveTab={setActiveTab} />;
    }

    switch (activeTab) {
      case 'home':
        return <HomePage lang={lang} setActiveTab={setActiveTab} />;
      case 'chat':
        return (
          <BharatChat
            lang={lang}
            messages={currentMessages}
            setMessages={setMessages}
          />
        );
      case 'schemes':
        return <SchemeMatcher lang={lang} />;
      case 'report':
        return (
          <CivicReporter
            lang={lang}
            complaints={currentComplaints}
            setComplaints={setComplaints}
          />
        );
      case 'culture':
        return <CultureHub lang={lang} />;
      case 'docs':
        return <DocumentChecker lang={lang} />;
      default:
        return <HomePage lang={lang} setActiveTab={setActiveTab} />;
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar Navigation */}
      <Sidebar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Mobile Top Header */}
      <div className="header-mobile" role="banner">
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
        <div style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--saffron)' }}>
          स्वदेश <span style={{ color: 'var(--white)' }}>Bharat</span>
        </div>
        <button
          className="theme-toggle-btn"
          style={{ padding: '6px', background: 'transparent', border: 'none' }}
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          aria-label="Toggle Theme"
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>

      {/* Main Content Wrapper */}
      <div className="main-wrapper">
        <main className="content-body" id="main-content">
          <Suspense fallback={
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: '200px',
              fontFamily: 'var(--font-title)',
              fontWeight: '600',
              color: 'var(--text-muted)'
            }}>
              Loading / लोड हो रहा है...
            </div>
          }>
            {renderContent()}
          </Suspense>
        </main>

        <footer className="footer" role="contentinfo">
          <p>{t.footerText}</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
