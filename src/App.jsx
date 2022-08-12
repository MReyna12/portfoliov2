import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Technologies from "./components/Technologies/Technologies";
import "./App.css";
import "bulma/css/bulma.min.css";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
    </div>
  );
}

export default App;
