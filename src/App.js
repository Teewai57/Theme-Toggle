import React, { useState, useEffect } from 'react'
import data from './data'
import Article from './Article'


const getStorageTheme = () => {
  let theme = 'light-theme';
  if(localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return Home
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme());
  
  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-mode');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  
  return <h2>dark mode starter</h2>
}

export default App
