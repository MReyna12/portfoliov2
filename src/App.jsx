import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import Project from "./components/Projects/Projects";
import "./App.css";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Project />
    </div>
  );
}

export default App;
