import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { translations } from '../data/i18n';
import { getChatResponse } from '../data/chatbotKb';
import { sanitizeText } from '../utils/security';

export default function BharatChat({ lang, messages, setMessages }) {
  const t = translations[lang] || translations["en"];
  const chatHistoryRef = useRef(null);
  
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [mascotWaving, setMascotWaving] = useState(false);
  const [isListening, setIsListening] = useState(false);
  
  // Cooldown State (3 seconds) to prevent rapid rate limit spikes
  const [cooldownActive, setCooldownActive] = useState(false);

  // Web Speech API availability check
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  const isSpeechSupported = !!SpeechRecognition;

  // Memoize suggested queries
  const suggestedQueries = useMemo(() => [
    {
      label: lang === 'hi' ? "जन्म प्रमाण पत्र कैसे प्राप्त करें?" : "How to get a Birth Certificate?",
      value: "How to get a Birth Certificate?"
    },
    {
      label: lang === 'hi' ? "पीएम आवास योजना दस्तावेज?" : "Documents required for PM Awas Yojana?",
      value: "Documents required for PM Awas Yojana?"
    },
    {
      label: lang === 'hi' ? "टूटी सड़क लाइट की रिपोर्ट?" : "How to report a broken street light?",
      value: "How to report a broken street light?"
    }
  ], [lang]);

  // Scroll logic
  useEffect(() => {
    if (chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const triggerMascotWave = useCallback(() => {
    setMascotWaving(true);
    setTimeout(() => setMascotWaving(false), 1200);
  }, []);

  /**
   * Calls the Gemini API with a system prompt and returns the result.
   * Model: gemini-3.5-flash.
   */
  const callGeminiApi = async (userText) => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("VITE_GEMINI_API_KEY is missing. Falling back to local offline matcher.");
      return null;
    }

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

    try {
      // Endpoint updated for gemini-3.5-flash
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent?key=${apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            contents: [{ parts: [{ text: userText }] }],
            systemInstruction: {
              parts: [{
                text: "You are Bharat AI, a helpful assistant for Indian citizens about government schemes, civic services, and local information. Answer clearly and concisely in a friendly tone."
              }]
            }
          }),
          signal: controller.signal
        }
      );

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`Gemini API returned status code ${response.status}`);
      }

      const data = await response.json();
      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      if (!textResponse) {
        throw new Error("Empty candidate parts in Gemini API response payload");
      }

      return textResponse;
    } catch (err) {
      clearTimeout(timeoutId);
      console.error("Gemini API call failed or timed out. Triggering fallback:", err);
      return null;
    }
  };

  const handleSendMessage = useCallback(async (textToSend) => {
    if (!textToSend || !textToSend.trim() || cooldownActive) return;

    // Security Input Sanitization
    const cleanText = sanitizeText(textToSend, 500);
    if (!cleanText.trim()) return;

    // Activate Cooldown for 3 seconds
    setCooldownActive(true);
    const cooldownTimer = setTimeout(() => setCooldownActive(false), 3000);

    const userTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newMsg = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: cleanText,
      time: userTime
    };

    setMessages(prev => [...prev, newMsg]);
    setInputText("");
    setIsTyping(true);
    triggerMascotWave();

    // Call Gemini API (with local fallback)
    const geminiText = await callGeminiApi(cleanText);
    const botTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    if (geminiText) {
      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: geminiText,
        time: botTime,
        source: "gemini"
      }]);
    } else {
      const fallbackResponse = getChatResponse(cleanText, lang === 'hi');
      setMessages(prev => [...prev, {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: fallbackResponse.answer,
        time: botTime,
        source: "offline"
      }]);
    }

    setIsTyping(false);
    triggerMascotWave();
  }, [lang, setMessages, triggerMascotWave, cooldownActive]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSendMessage(inputText);
  };

  // Web Speech recognition handler
  const handleToggleVoiceInput = () => {
    if (!isSpeechSupported || cooldownActive) return;

    if (isListening) {
      setIsListening(false);
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => {
      setIsListening(true);
    };

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript;
      setInputText(speechToText);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    recognition.start();
  };

  const handleKeyDownMascot = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      triggerMascotWave();
    }
  };

  const quickAccessChips = [
    { label: "Farmer Schemes", labelHi: "किसान योजनाएं", query: "What is PM-KISAN and who is eligible?", icon: "🌾" },
    { label: "Ayushman Bharat", labelHi: "आयुष्मान भारत", query: "What is Ayushman Bharat card and how to get it?", icon: "🏥" },
    { label: "RTI Process", labelHi: "आरटीआई प्रक्रिया", query: "How do I file a Right to Information (RTI) application in India?", icon: "📝" },
    { label: "DigiLocker Info", labelHi: "डिजिलॉकर जानकारी", query: "What is DigiLocker and is it legally valid?", icon: "🔒" },
    { label: "Aadhaar Help", labelHi: "आधार सहायता", query: "How to apply for an Aadhaar Card?", icon: "🆔" }
  ];

  const formatMessageText = (text) => {
    if (!text) return "";
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        return <strong key={index} style={{ fontWeight: '700' }}>{part}</strong>;
      }
      return part;
    });
  };

  return (
    <div className="glass-card chat-container">
      {/* Header Row */}
      <div className="chat-header-row">
        <div className="form-title-group" style={{ margin: 0 }}>
          <h3>{t.cardChatTitle}</h3>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.subtitle}</p>
        </div>

        {/* Animated Elephant Mascot */}
        <div 
          className="mascot-container" 
          onMouseEnter={triggerMascotWave} 
          onClick={triggerMascotWave}
          onKeyDown={handleKeyDownMascot}
          role="button"
          tabIndex="0"
          aria-label="AI assistant mascot. Waving elephant. Press enter or space to wave."
          title="Swadesh - Your AI Mascot! Click or focus and press Enter to wave."
        >
          <svg
            className={`mascot-svg ${mascotWaving ? 'waving' : ''}`}
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="presentation"
          >
            <circle cx="16" cy="32" r="11" fill="#718096" />
            <circle cx="16" cy="32" r="7" fill="var(--saffron)" opacity="0.8" />
            <circle cx="48" cy="32" r="11" fill="#718096" />
            <circle cx="48" cy="32" r="7" fill="var(--green)" opacity="0.8" />
            <ellipse cx="32" cy="34" rx="16" ry="14" fill="#a0aec0" />
            <path d="M32 20 L35 28 H29 Z" fill="var(--saffron)" />
            <circle cx="32" cy="30" r="1.5" fill="var(--green)" />
            <circle cx="24" cy="32" r="2" fill="#1a202c" />
            <circle cx="40" cy="32" r="2" fill="#1a202c" />
            <circle cx="23.5" cy="31.5" r="0.6" fill="#fff" />
            <circle cx="39.5" cy="31.5" r="0.6" fill="#fff" />
            <circle cx="19" cy="36" r="2.5" fill="#f56565" opacity="0.6" />
            <circle cx="45" cy="36" r="2.5" fill="#f56565" opacity="0.6" />
            <path d="M32 38 Q32 48 24 47" stroke="#a0aec0" strokeWidth="5" strokeLinecap="round" fill="none" />
            <path d="M32 38 Q32 48 24 47" stroke="#cbd5e0" strokeWidth="2.2" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>

      {/* Translations warning note for secondary languages */}
      {!['en', 'hi'].includes(lang) && (
        <div 
          style={{
            fontSize: '0.75rem',
            color: 'var(--saffron)',
            backgroundColor: 'rgba(255, 153, 51, 0.08)',
            padding: '8px 12px',
            borderRadius: '8px',
            marginBottom: '12px',
            border: '1px solid rgba(255, 153, 51, 0.2)',
            fontWeight: '500'
          }}
          role="note"
        >
          ℹ️ {t.transNote}
        </div>
      )}

      {/* Quick-Access Shortcut Chips */}
      <div className="quick-chips-container" style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '8px',
        marginBottom: '16px',
        padding: '2px 0'
      }}>
        {quickAccessChips.map((chip, idx) => (
          <button
            key={idx}
            type="button"
            className="quick-chip-btn"
            onClick={() => handleSendMessage(chip.query)}
            disabled={isTyping || cooldownActive}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '600',
              cursor: 'pointer',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-card)',
              color: 'var(--text-main)',
              boxShadow: 'var(--shadow-inset)',
              transition: 'all 0.2s ease',
              outline: 'none'
            }}
            aria-label={`Ask: ${lang === 'hi' ? chip.labelHi : chip.label}`}
          >
            <span>{chip.icon}</span>
            <span>{lang === 'hi' ? chip.labelHi : chip.label}</span>
          </button>
        ))}
      </div>

      {/* Chat Messages */}
      <div className="chat-history" ref={chatHistoryRef} role="log" aria-live="polite">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`chat-message ${msg.sender}`}
            aria-label={`${msg.sender === 'user' ? 'You' : 'Swadesh AI'}: ${msg.text}`}
          >
            {formatMessageText(msg.text)}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '6px', gap: '6px' }}>
              {msg.source && (
                <span className={`chat-message-source ${msg.source}`}>
                  {msg.source === 'gemini' ? 'AI' : lang === 'hi' ? 'ऑफ़लाइन' : 'Offline'}
                </span>
              )}
              <span className="chat-message-time" style={{ marginTop: 0 }}>{msg.time}</span>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="typing-indicator" aria-live="assertive">
            {t.chatTyping}
          </div>
        )}
      </div>

      {/* Suggestions */}
      <div className="chat-suggestions-box">
        <h4 className="chat-suggestions-title">{t.chatSuggestions}</h4>
        <div className="chat-suggestions-list" role="group" aria-label="Suggested Queries">
          {suggestedQueries.map((q, idx) => (
            <button
              key={idx}
              className="chat-suggestion-chip"
              onClick={() => handleSendMessage(q.value)}
              disabled={isTyping || cooldownActive}
              aria-label={`Ask: ${q.label}`}
            >
              {q.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input controls */}
      <form onSubmit={handleFormSubmit} className="chat-input-area" role="search">
        {/* Voice Input Button */}
        <button
          type="button"
          className={`chat-voice-btn ${isListening ? 'listening' : ''}`}
          onClick={handleToggleVoiceInput}
          disabled={isTyping || cooldownActive || (!isSpeechSupported && !isListening)}
          aria-label={lang === 'hi' ? 'वॉयस इनपुट' : 'Voice input'}
          title={isSpeechSupported ? 
            (lang === 'hi' ? 'माइक दबाएं और बोलें' : 'Press mic and speak') : 
            (lang === 'hi' ? 'इस ब्राउज़र में वॉयस इनपुट समर्थित नहीं है' : 'Voice input not supported in this browser')}
        >
          {isListening ? (
            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
              <path d="M6 19h12v2H6v-2zm6-17c-2.76 0-5 2.24-5 5v5c0 2.76 2.24 5 5 5s5-2.24 5-5V7c0-2.76-2.24-5-5-5zm3 10c0 1.66-1.34 3-3 3s-3-1.34-3-3V7c0-1.66 1.34-3 3-3s3 1.34 3 3v5zm3-5h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 9.8 6.7 6.8H5c0 3.42 2.72 6.2 6 6.6V17h2v-3.6c3.28-.4 6-3.18 6-6.6z" />
            </svg>
          ) : (
            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.66 9 5v6c0 1.66 1.34 3 3 3zm5.3-3c0 3-2.54 5.1-5.3 5.1S6.7 14 6.7 11H5c0 3.42 2.72 6.2 6 6.6V21h2v-3.4c3.28-.4 6-3.18 6-6.6h-1.7z" />
            </svg>
          )}
        </button>

        <label htmlFor="chat-input-field" className="sr-only" style={{ display: 'none' }}>
          {t.chatPlaceholder}
        </label>
        <input
          id="chat-input-field"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={t.chatPlaceholder}
          className="chat-input"
          disabled={isTyping || cooldownActive}
          maxLength="200"
          required
        />
        <button 
          type="submit" 
          className="chat-send-btn" 
          disabled={isTyping || cooldownActive}
          aria-label={cooldownActive ? t.pleaseWait : t.chatSend}
        >
          {cooldownActive ? t.pleaseWait : t.chatSend}
        </button>
      </form>
    </div>
  );
}
