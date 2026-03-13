import React from "react";
import { NavLink } from "react-router-dom";
import "../assets/styles/styles.css";

// Style function for active links
const navLinkStyles = ({ isActive }) => ({
  color: isActive ? "white" : "#012619",
  backgroundColor: isActive ? "#012619" : "#78bf9e",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  textAlign: "center",
});

export const Navbar = () => {
  return (
    <nav className="NavBar">
      <NavLink
        to="/"
        sx={{ border: "5px", BorderColor: "#012619" }}
        className="navbarElement"
        style={navLinkStyles}
        end
      >
        Informacion
      </NavLink>
      <NavLink to="/projects" className="navbarElement" style={navLinkStyles}>
        Proyectos
      </NavLink>
    </nav>
  );
};
