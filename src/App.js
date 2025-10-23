
import './App.css';
import CertificatesSection from './components/Certificates';
import ExperienceSection from './components/Experience';
import Footer from './components/Footer';
import Grad from './components/Grad';
import Header from './components/Header';
import Hero from './components/Hero';
import FrameworksProjects from './components/Projects';
import PublicationsSection from './components/Publications';

function App() {
  

  return (
    <>
    <Header/>
    <Hero/>
    <Grad />
    <ExperienceSection />
    <PublicationsSection />
    <FrameworksProjects />
    <CertificatesSection />
    <Footer/>
    </>
  );
}

export default App;
