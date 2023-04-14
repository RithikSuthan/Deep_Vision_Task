import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="http://localhost:3000/">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://localhost:3000/register">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;