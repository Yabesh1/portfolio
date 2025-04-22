
import './App.css';
import About from './Components/About/About';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Experience from './Components/Experience/Experience';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Project/Project';
import "bootstrap-icons/font/bootstrap-icons.css";


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
