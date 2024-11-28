import './App.css';
import Alert from './Components/Alert';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    // Automatically hide the alert after 3 seconds
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
      document.body.style.transition = 'background-color 0.5s, color 0.5s'; // Smooth transition
      showAlert("Dark Mode has been Enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.body.style.transition = 'background-color 0.5s, color 0.5s'; // Smooth transition
      showAlert("Light Mode has been Enabled", "Success");
    }
  };

  return (
    <>
    <Router>
      <Navbar title="TextifyPro" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path="/about" element={<About mode={mode} />} /> {/* Pass mode as a prop */}
          <Route 
  path="/" 
  element={
    <div 
      className="home-page" 
      style={{
        backgroundColor: mode === 'dark' ? '#2c2c2c' : '#f5f5f5', // Dark mode: dark gray, Light mode: light gray
        color: mode === 'dark' ? '#ffffff' : '#333333', // Default text color
        padding: '20px',
      }}
    >
      <div className="header-container">
        <h1 
          className="styled-heading" 
          style={{
            color: '#87cefa', // Light blue color for both dark and light mode
            fontWeight: 'bold',
            fontSize: '2.5rem',
            textAlign: 'center',
            textShadow: mode === 'dark' 
              ? '0px 0px 10px rgba(255, 255, 255, 0.6)' // Glow effect for dark mode
              : 'none', // No shadow for light mode
          }}
        >
          Enter the Text to Analyze
        </h1>
        <p 
          className="subheading" 
          style={{
            color: mode === 'dark' ? '#dddddd' : '#555555', // Subheading color
            textAlign: 'center',
          }}
        >
          Discover insights about your text. Analyze word count, character count, readability, and more!
        </p>
      </div>
      <TextForm showAlert={showAlert} mode={mode} />
    </div>
  }
/>

        </Routes>
      </div>
    </Router>
    <Footer />
    </>
  );
}

export default App;
