import NavBar from "./Components/NavBar/NavBar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skill from "./Components/Skill/Skill";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";



const App = () => {
  return (
    <div className="main">
       
      <section id="Home">
        <NavBar />
        <Hero />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Services">
        <Services />
      </section>
      <Projects />
      
      <section id="Skills" className="skill-section">
        <Skill />
      </section>

      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
