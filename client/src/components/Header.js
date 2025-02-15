// src/components/Header.js
import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: 'rgb(209, 191, 177)',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'fixed', // Make the header fixed
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000, // Ensure it appears above other content
  };

  const titleStyle = {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  };

  const buttonContainerStyle = {
    display: 'flex',
    gap: '10px', // space between buttons
  };

  const buttonStyle = {
    border: 'none',
    backgroundColor: '#fff',
    borderRadius: '20px',
    padding: '8px 16px',
    cursor: 'pointer',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  return (
    <header style={headerStyle}>
      <div style={titleStyle}>Unihabitat</div>
      <div style={buttonContainerStyle}>
        <button style={buttonStyle}>Log in</button>
        <button style={buttonStyle}>Sign up</button>
      </div>
    </header>
  );
};

export default Header;
