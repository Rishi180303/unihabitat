// src/App.js
import React from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';

function App() {
  const appStyle = {
    marginTop: '70px', // adjust according to your header's height
  };

  return (
    <div style={appStyle}>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
