import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="brand">
          <h1>Lucky Vishwakarma</h1>
          <span>Web Developer | Software Engineer</span>
        </div>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/certificates">Certificates</NavLink>
         <NavLink to="/experience">Experience</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
