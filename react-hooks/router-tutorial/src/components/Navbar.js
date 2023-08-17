import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };
  return (
    <nav className="primary-nav">
      <NavLink style={navLinkStyle} to={"/"}>
        Home
      </NavLink>
      <NavLink style={navLinkStyle} to={"/about"}>
        about
      </NavLink>
      <NavLink style={navLinkStyle} to={"/products"}>
        Products
      </NavLink>
    </nav>
  );
}

export default Navbar;
