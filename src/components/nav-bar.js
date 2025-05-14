import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/nav-bar.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <ul className="ul-home">
        <li>
          <Link className="home" to="/">
            laila sorabji
          </Link>
        </li>
      </ul>
      <nav className="nav-bar">
        <button
          className="nav-menu-button times-new-roman"
          onClick={toggleMenu}
        >
          {isMenuOpen ? "press to close menu" : "press to open menu"}
        </button>
        <ul className={isMenuOpen ? "active" : ""}>
          <div>
            <li>
              <Link className="page" to="/geometry-and-decolonisation">
                geometry and decolonisation
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link className="page" to="/assemblages">
                assemblages
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link className="page" to="/chance-and-sequence">
                chance and sequence
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link className="page" to="/derive">
                dérive
              </Link>
            </li>
          </div>
          <div>
            <li>
              <Link className="page" to="/futures">
                futures
              </Link>
            </li>
          </div>
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
