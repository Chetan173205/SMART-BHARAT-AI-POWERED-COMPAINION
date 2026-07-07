import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          backgroundColor: '#f2f5fa',
          fontFamily: 'system-ui, sans-serif',
          color: '#1a2332',
          padding: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            background: '#ffffff',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
            maxWidth: '480px',
            borderTop: '5px solid #ff9933'
          }}>
            <span style={{ fontSize: '3.5rem', display: 'block', marginBottom: '20px' }}>⚠️</span>
            <h1 style={{ fontSize: '1.8rem', marginBottom: '12px', fontWeight: '700' }}>Something went wrong.</h1>
            <p style={{ color: '#4a5568', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
              We encountered a temporary error loading this page. Please refresh the page or try again.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                backgroundColor: '#12213d',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontSize: '0.95rem',
                fontWeight: '600',
                cursor: 'pointer',
                boxShadow: '0 4px 6px rgba(0,0,0,0.08)',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d325c'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#12213d'}
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
