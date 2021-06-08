import React from "react";
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


const Navbar = () => {
  const styles = {
    display: "flex",
    background: "grey",
    justifyContent: "space-between",
    padding: "1rem",
  };

  return (
    <div style={styles}>
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
};

export default Navbar;
