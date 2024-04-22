import "./components/Header/Header.jsx"
import Header from "./components/Header/Header.jsx";
import "./App.css";
import "./components/Hero/Hero.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Skills from "./components/Skills/Skills.jsx";
import Footer from "./components/Footer/Footer.jsx";

const App = () => {
  return ( 
    <>
   <Header></Header>
   <Hero></Hero>
   <Projects></Projects>
   <Skills></Skills> 
   <Footer/>
    </>
   );
}
 
export default App;