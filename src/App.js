import "./App.css";
import HiddenMenu from "./Components/HiddenMenu/HiddenMenu";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Sections/About/About";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import Home from "./Sections/Home/Home";
import Projects from "./Sections/Projects/Projects";

function App() {
  return (
    <div>
      <Navbar />
      <HiddenMenu />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
