// client/src/App.js
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <BrowserRouter>
      <Header onSignUpClick={() => setShowSignUp(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
      <SignUpModal open={showSignUp} onClose={() => setShowSignUp(false)} />
    </BrowserRouter>
  );
}

export default App;
