import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import SignUpModal from './components/SignUpModal';

function App() {
  const [showSignUp, setShowSignUp] = useState(false);
  const appStyle = { marginTop: '70px' };

  return (
    <Router>
      <Header onSignUpClick={() => setShowSignUp(true)} />
      {showSignUp && <SignUpModal onClose={() => setShowSignUp(false)} />}
      <div style={appStyle}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
