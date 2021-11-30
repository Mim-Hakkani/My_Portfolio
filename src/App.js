import './App.css';
import Banner from './Components/Banner/Banner';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import Projects from './Components/Projects/Projects';
import About from './Components/AboutMe/About';
import MyWork from './Components/HowIwork/MyWork';
import MYServices from './Components/MyServices/MYServices';
import Header from './Components/Header/Header';
import { 
  BrowserRouter,
  Routes,
  Route,
  Link

 } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blogs/Blog';

function App() {
  return (
    <div className="App">
      
      {/* <Banner></Banner> */}
      {/* <Header></Header>
      <About></About> 
      <MyWork></MyWork>  
      <MYServices></MYServices> 
      <Skills></Skills>
      <Projects></Projects>
      <Contact></Contact>  */}

      {/* router  */}

      <BrowserRouter>
         <Header></Header>
        <Routes>
            <Route path="/" element={
               <><Banner></Banner>
               <MyWork></MyWork>  
               <MYServices></MYServices> 
               <Skills></Skills>
               <Projects></Projects>
               <Contact></Contact></>
            }/>

           <Route path="/home" element={
               <><Banner></Banner>
              
               <MyWork></MyWork>  
               <MYServices></MYServices> 
               <Skills></Skills>
               <Projects></Projects>
               <Contact></Contact></>
            }/>

          <Route path="/aboutme" element={
               <>
               
              
               <Skills></Skills>
               <About></About> 
               <Footer></Footer>
               </>
            }/>

          <Route path="/projects" element={
               <>
               
              <Projects></Projects>
               </>
            }/>

           <Route path="/blogs" element={
              <Blog></Blog>
            }/>
            <Route path="/contact" element={
               
               
              <Contact></Contact>
             
            }/>
        </Routes>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
