import Form from './components/Form';
import "./App.css";
import { createContext } from 'react';
import { useState } from 'react';
import ReactSwitch from 'react-switch';

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")
 
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>
        <Form />
       <div className='switch'>
        <label> {theme === "light" ? "Light Mode" : "Dark Mode" } </label>
       <ReactSwitch onChange={toggleTheme} checked={theme === "light"}/>
       </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
