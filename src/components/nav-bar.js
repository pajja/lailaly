import React from "react";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";

function NavBar() {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>
            <Link className="home" to="/">
              Laila Sorabji
            </Link>
          </li>
          <li>
            <Link className="page" to="/geometry-and-decolonisation">
              geometry and decolonisation
            </Link>
          </li>
          <li>
            <Link className="page" to="/assemblages">
              assemblages
            </Link>
          </li>
          <li>
            <Link className="page" to="/chance-and-sequence">
              chance and sequence
            </Link>
          </li>
          <li>
            <Link className="page" to="/derive">
              dérive
            </Link>
          </li>
          <li>
            <Link className="page" to="/futures">
              futures
            </Link>
          </li>
          <li>
            <Link className="page" to="/womanhood">
              womanhood
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
