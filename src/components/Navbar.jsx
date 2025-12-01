import React from "react";
import "./Navbar.css";
// 1. Importamos NavLink en lugar de Link
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const getLinkClass = ({ isActive }) => (isActive ? "active-link" : "");
  return (
    <div className="navbar-container">
      <nav>
        <img
          src="https://uvirtual-cloud.uce.edu.ec/pluginfile.php/1/theme_lambda/logo/1749137089/sellos-uce.png"
          alt="Logo UCE"
          className="navbar-logo"
        />

        <ul>
          <li>
            {/* Solo pasamos la referencia a la función */}
            <NavLink to="/" className={getLinkClass}>
              Index
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={getLinkClass}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className={getLinkClass}>
              Students
            </NavLink>
          </li>
        </ul>

        <Link to="/login">
          <button>Login</button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
