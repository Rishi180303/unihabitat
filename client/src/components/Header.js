// src/components/Header.js
import React from 'react';

const Header = ({ onSignUpClick }) => {
  const headerStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // translucent white
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed', // sticky header
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    color: '#000',
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    color: '#000',
  };

  return (
    <header style={headerStyle}>
      <div style={titleStyle}>Unihabitat</div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle} onClick={onSignUpClick}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
