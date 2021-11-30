import './App.css';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import About from './Components/AboutMe/About';
import MyWork from './Components/HowIwork/MyWork';
import MYServices from './Components/MyServices/MYServices';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Banner></Banner>
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact> 
   
      <About></About> 
      <MyWork></MyWork>  
      <MYServices></MYServices> 
      
      <Header></Header>
     
    </div>
  );
}

export default App;
