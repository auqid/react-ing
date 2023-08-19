import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useAuth } from "./Auth";
function Navbar() {
  const navLinkStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "none" : "underline",
    };
  };

  const auth = useAuth();
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
      <NavLink style={navLinkStyle} to={"/profile"}>
        Profile
      </NavLink>
      {!auth.user && (
        <NavLink style={navLinkStyle} to={"/login"}>
          login
        </NavLink>
      )}
    </nav>
  );
}

export default Navbar;
