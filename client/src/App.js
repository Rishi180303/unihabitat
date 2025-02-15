// src/App.js
import React, { useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  const appStyle = {
    marginTop: '70px', // offset for fixed header
  };

  return (
    <div style={appStyle}>
      <Header onSignUpClick={() => setShowSignUp(true)} />
      <HomePage />
      <Footer />
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
    </div>
  );
}

export default App;
