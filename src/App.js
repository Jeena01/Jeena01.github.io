import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import Experience from './components/Experience';
//import background from "./bg-img.jpg"
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
    <div
    className="App" >
      <Hero/>
      <Skills/>
      <Experience/>
      <Projects/>
    </div>
    </ThemeProvider>
  );
}

export default App;
