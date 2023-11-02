import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="nav">
        <Link to="/" className="site-title">
          Wanyama
        </Link>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Books">Books</Link>
          </li>
          <li>
            <Link to="/Movies">Movies</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
