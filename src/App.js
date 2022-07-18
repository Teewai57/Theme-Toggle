import Form from './components/Form';
import "./App.css";
import { createContext } from 'react';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")
 
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id='light'>
        <Form />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
