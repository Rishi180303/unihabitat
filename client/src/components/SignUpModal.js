// src/components/SignUpModal.js
import React from 'react';

const SignUpModal = ({ onClose }) => {
  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 2000,
  };

  const modalStyle = {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    width: '350px',
    textAlign: 'center',
  };

  const headerStyle = {
    fontSize: '1.5rem',
    marginBottom: '10px',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#666',
    marginBottom: '20px',
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4285F4',
    color: '#fff',
  };

  const linkButtonStyle = {
    ...buttonStyle,
    backgroundColor: 'rgb(209, 191, 177)',
    color: '#fff',
  };

  const orTextStyle = {
    margin: '20px 0',
    fontSize: '0.9rem',
    color: '#333',
  };

  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <h2 style={headerStyle}>Sign in with school email</h2>
        <p style={descriptionStyle}>
          With your school email, we'll verify you're a real student and award you a badge.
        </p>
        <button
          style={googleButtonStyle}
          onClick={() => {
            console.log('Sign in with Google');
            onClose();
          }}
        >
          Sign in with Google
        </button>
        <p style={orTextStyle}>OR</p>
        <button
          style={linkButtonStyle}
          onClick={() => {
            console.log('Sign in with one-time link');
            onClose();
          }}
        >
          Sign in with one-time link
        </button>
        <p style={{ marginTop: '10px', fontSize: '0.85rem', color: '#555' }}>
          No password setup required. We'll email you a one-time sign in link for your convenience.
        </p>
        <div style={{ marginTop: '10px' }}>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#007bff',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
