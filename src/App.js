import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

// import Bio from './pages/bio';
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
    // style={{
    //   backgroundColor: isDarkMode ? '#121212' : '#FFFFFF',
    //   color: isDarkMode ? '#FFFFFF' : '#000000',
    //   transition: 'all 0.3s ease',
    //   minHeight: '100vh',
    // }}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Home isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
          />
          {/* Uncomment the line below if the Bio component is available */}
          {/* <Route path="/bio" element={<Bio isDarkMode={isDarkMode} />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
