import React from "react";
import About from "../contents/About";
import Contact from "../contents/Contact";
import Education from "../contents/Education";
import Home from "../contents/Home";
import Projects from "../contents/Projects";

const Navbar = () => {
  return (
    <div>
      <Home />
      <About />
      <Contact />
      <Projects />
    </div>
  );
};

export default Navbar;
