import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Experience from './components/Experience';
//import background from "./bg-img.jpg"
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Navbar from './components/Navbar';

function App() {
  const darkTheme = createTheme({
    typography: {
      fontFamily: "'Roboto', 'Arial', sans-serif", // Replace with your desired font(s)
    },
    palette: {
      mode: 'dark', // Ensures the dark mode base styling
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <div
    className="App">
      <Navbar />
      <Hero/>
      <Skills/>
      <Experience />
      <Projects  />
    </div>
    </ThemeProvider>
  );
}

export default App;
