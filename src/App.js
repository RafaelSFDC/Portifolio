import Header from "./components/Header/Header";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Technologies from "./components/Technologies/Technologies.js";
import About from "./components/About/About.js";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Projects />
      <Technologies />
      <About />
      <Contact />
    </div>
  );
}

export default App;
