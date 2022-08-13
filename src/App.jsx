import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import "./App.css";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
