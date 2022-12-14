import React from "react";
import "../src/App.css";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Navbar from "./components/Navbar/Navbar";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container" id="container">
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default App;
