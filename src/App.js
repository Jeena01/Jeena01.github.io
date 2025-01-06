
import './App.css';
import NavBar from './components/NavBar';
import background from "./bg-img.jpg"

function App() {
  return (
    <div style={{backgroundImage:`url(${background})`}} 
    className="App">
        <NavBar/>
      
    </div>
  );
}

export default App;
