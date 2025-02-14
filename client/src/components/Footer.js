// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '10px', backgroundColor: '#f5f5f5', textAlign: 'center', marginTop: '20px' }}>
      <p>&copy; {new Date().getFullYear()} Unihabitat. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
