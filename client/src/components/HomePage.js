// src/components/HomePage.js
import React from 'react';

const Hero = () => (
  <section style={{
    background: 'white',
    padding: '100px 20px', // extra padding to clear the fixed header
    textAlign: 'center'
  }}>
    <h1 style={{ fontSize: '3rem', margin: '0' }}>Welcome to Unihabitat</h1>
    <p style={{ fontSize: '1.2rem', margin: '20px 0' }}>
      Your one-stop social network for student housing.
    </p>
  </section>
);

const Features = () => {
  const featureStyle = {
    width: '80%',
    margin: '20px 0',
    textAlign: 'center',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    backgroundColor: '#e0e0e0' // grey background for feature boxes
  };

  return (
    <section style={{
      display: 'flex',
      flexDirection: 'column', // stack items vertically
      alignItems: 'center',
      padding: '40px 20px',
      background: 'white'
    }}>
      <div style={featureStyle}>
        <h2>Verified Users</h2>
        <p>Every user is verified with a .edu email, ensuring a trusted community.</p>
      </div>
      <div style={featureStyle}>
        <h2>University Specific</h2>
        <p>Find roommates and subleases exclusively within your university network.</p>
      </div>
      <div style={featureStyle}>
        <h2>Trust & Safety</h2>
        <p>Our rigorous verification process and secure authentication ensure your safety.</p>
      </div>
    </section>
  );
};

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Features />
    </div>
  );
};

export default HomePage;
