
import './App.css';
//import background from "./bg-img.jpg"
import mathbg from "./144644014_10148867.jpg"
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About'
function App() {
  return (
    <div style={{backgroundImage:`url(${mathbg})`}} 
    className="App">
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  );
}

export default App;
