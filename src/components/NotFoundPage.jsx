import React from 'react';

/**
 * NotFoundPage component that displays a friendly 404 screen
 * for catch-all invalid route path redirection.
 */
export default function NotFoundPage({ setActiveTab }) {
  return (
    <div className="glass-card" style={{
      textAlign: 'center',
      padding: '60px 20px',
      maxWidth: '500px',
      margin: '40px auto'
    }}>
      <span style={{ fontSize: '4rem', display: 'block', marginBottom: '20px' }}>🗺️</span>
      <h2 style={{ fontSize: '1.8rem', color: 'var(--navy)', marginBottom: '12px' }}>Page Not Found</h2>
      <p style={{ color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '24px' }}>
        The page you are looking for does not exist or has been moved. Let's get you back on track!
      </p>
      <button
        onClick={() => setActiveTab('home')}
        className="btn-primary"
        style={{
          padding: '12px 24px',
          fontWeight: '600',
          fontSize: '0.95rem'
        }}
      >
        Back to Home
      </button>
    </div>
  );
}
