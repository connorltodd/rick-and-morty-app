import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <span>
            <Link to="/">Home</Link>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <Link to="/about">About</Link>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
