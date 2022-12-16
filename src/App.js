import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
// import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Developers from './components/Developers';
import Contact from './components/Contact';
import Footer from './components/Footer';
import HeroHeader from './components/HeroHeader';
// import AnchorLink from "react-anchor-link-smooth-scroll";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroHeader />
      <About />
      <Services /> 
      <Developers />
      <Contact />
      <Footer />
    </div>
    
  );
}

export default App;
