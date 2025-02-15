// src/components/SignUpModal.js
import React, { useState } from 'react';
import { auth } from '../firebaseConfig';
import {
  GoogleAuthProvider,
  signInWithPopup,
  sendSignInLinkToEmail,
} from 'firebase/auth';

const SignUpModal = ({ onClose }) => {
  const [email, setEmail] = useState('');

  // --- STYLES --------------------------------------------------------------
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
    padding: '20px',
    borderRadius: '8px',
    width: '400px',
    position: 'relative',
    fontFamily: 'sans-serif',
  };

  // Close (X) button in the top-right corner
  const closeButtonStyle = {
    position: 'absolute',
    top: '12px',
    right: '12px',
    background: 'none',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
  };

  const titleStyle = {
    fontSize: '1.25rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textAlign: 'center',
  };

  // Box containing the "With your review..." message and verified badge
  const infoBoxStyle = {
    backgroundColor: '#F9FAFB',
    padding: '10px',
    borderRadius: '8px',
    marginBottom: '20px',
    textAlign: 'center',
  };

  const verifiedTextStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '5px',
    marginTop: '5px',
    fontWeight: 'bold',
  };

  const sectionTitleStyle = {
    margin: '15px 0 10px',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  // Common button styling
  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '1rem',
    marginTop: '5px',
  };

  const googleButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#4285F4',
    color: '#fff',
  };

  const sendEmailButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#333',
    color: '#fff',
    width: 'auto',
    marginLeft: '10px',
    marginTop: '0',
  };

  const orStyle = {
    textAlign: 'center',
    margin: '15px 0',
    color: '#999',
    fontSize: '0.9rem',
  };

  // Input container for the one-time link flow
  const inputContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    marginTop: '10px',
  };

  const emailInputStyle = {
    flex: 1,
    padding: '10px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const subTextStyle = {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '5px',
  };

  // --- LOGIC ---------------------------------------------------------------
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // Check if email ends with '.edu'
      if (user.email && user.email.endsWith('.edu')) {
        console.log('Signed in successfully with Google.');
        window.location.href = '/dashboard';
      } else {
        alert('Please sign in with a .edu email address.');
        await auth.signOut();
      }
    } catch (error) {
      console.error('Error during Google sign in:', error);
    }
  };

  const handleEmailLinkSignIn = async () => {
    if (!email.endsWith('.edu')) {
      alert('Please enter a valid .edu email address.');
      return;
    }
    const actionCodeSettings = {
      url: window.location.origin + '/finishSignIn',
      handleCodeInApp: true,
    };
    try {
      await sendSignInLinkToEmail(auth, email, actionCodeSettings);
      window.localStorage.setItem('emailForSignIn', email);
      alert('Sign-in link sent! Check your email.');
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error sending email link:', error);
    }
  };

  // --- RENDER --------------------------------------------------------------
  return (
    <div style={overlayStyle}>
      <div style={modalStyle}>
        <button style={closeButtonStyle} onClick={onClose}>
          ✕
        </button>
        <h2 style={titleStyle}>Sign in with school email</h2>

        {/* Info box with verified badge text */}
        <div style={infoBoxStyle}>
          <p style={{ margin: 0 }}>
            With your review, we'll let readers know you're a real student with
            this badge:
          </p>
          <div style={verifiedTextStyle}>
            Verified Student <span>✅</span>
          </div>
        </div>

        {/* Google Sign-In */}
        <div style={sectionTitleStyle}>Sign in with Google</div>
        <button style={googleButtonStyle} onClick={handleGoogleSignIn}>
          Sign in with Google&nbsp;
          <span style={{ fontSize: '1.2rem' }}>G</span>
        </button>

        <div style={orStyle}>OR</div>

        {/* One-time link */}
        <div style={sectionTitleStyle}>Sign in with one-time link</div>
        <p style={subTextStyle}>
          No password setup required. We'll email you a one-time sign in link
          for your convenience.
        </p>
        <div style={inputContainerStyle}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={emailInputStyle}
          />
          <button style={sendEmailButtonStyle} onClick={handleEmailLinkSignIn}>
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
