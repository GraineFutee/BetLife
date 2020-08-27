import React from 'react';
import { Link } from "react-router-dom"


// -------------------------------------------------------------------------------------
// Navbar
// -------------------------------------------------------------------------------------
export default function NavBar() {


// -------------------------------------------------------------------------------------
  return (
    <nav className="navbar has-background-dark">
      <div className="navbar-brand">

          <Link 
            className="navbar-item has-text-white" 
            to="/">
              Home
          </Link>

          <Link 
            className="navbar-item has-text-white" 
            to="/myMethods">
              My Methods
          </Link>

      </div>
    </nav>
  );
}
