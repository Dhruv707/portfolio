import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About/About";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </div>
  );
}

export default App;
