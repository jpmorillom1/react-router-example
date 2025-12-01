import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <nav>
        <img
          src="https://uvirtual-cloud.uce.edu.ec/pluginfile.php/1/theme_lambda/logo/1749137089/sellos-uce.png"
          alt=""
          className="navbar-logo"
        />

        <ul>
          <Link to="/">
            <li>Index</li>
          </Link>

          <Link to="/about">
            <li>About</li>
          </Link>

          <Link to="/students">
            <li>Students</li>
          </Link>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};

export default Navbar;
