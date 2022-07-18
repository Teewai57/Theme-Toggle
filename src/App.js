import Form from './components/Form';
import "./App.css";
import { createContext } from 'react';


export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <ThemeContext.Provider>
      <div className='App' id='light'>
        <Form />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
