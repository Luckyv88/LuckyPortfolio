import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Inline CSS inside <style> tag */}
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 15px 30px;
          background: #121212;
          color: white;
          position: sticky;
          top: 0;
          z-index: 999;
        }

        .nav-left .brand h1 {
          margin: 0;
          font-size: 1.5rem;
          color: #00bcd4;
        }

        .nav-left .brand span {
          font-size: 0.9rem;
          color: #ccc;
        }

        .nav-links {
          display: flex;
          gap: 25px;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-weight: 500;
          transition: 0.3s ease;
        }

        .nav-links a:hover,
        .nav-links a.active {
          color: #00bcd4;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 25px;
          height: 20px;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: white;
          border-radius: 2px;
          transition: 0.3s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 70px;
            right: 0;
            background: #1f1f1f;
            flex-direction: column;
            width: 100%;
            text-align: center;
            gap: 15px;
            padding: 20px 0;
            display: none;
          }

          .nav-links.active {
            display: flex;
          }

          .hamburger {
            display: flex;
          }
        }
      `}</style>

      {/* Navbar HTML Structure */}
      <nav className="navbar">
        {/* Left side: Brand */}
        <div className="nav-left">
          <div className="brand">
            <h1>Lucky Vishwakarma</h1>
            <span>Web Developer | Software Engineer</span>
          </div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/skills" onClick={() => setMenuOpen(false)}>
            Skills
          </NavLink>
          <NavLink to="/education" onClick={() => setMenuOpen(false)}>
            Education
          </NavLink>
          <NavLink to="/certificates" onClick={() => setMenuOpen(false)}>
            Certificates
          </NavLink>
          <NavLink to="/experience" onClick={() => setMenuOpen(false)}>
            Experience
          </NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
