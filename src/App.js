import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Services /> 
    </div>
    
  );
}

export default App;
