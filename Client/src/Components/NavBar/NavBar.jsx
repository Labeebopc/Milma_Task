import React from 'react'
import './NavBar.css'

function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="navbar-nav col-md-4">
        <i class="bi bi-credit-card-2-front"></i>
        <i className="bi bi-chat"></i>
      </div>

      {/* Navbar Center Item */}

      <div className="headname col-md-4">
        <h4 className="headnametitle">MILMA Ice cream Task</h4>
      </div>

      {/* Navbar Right end Item */}

      <div className="login-section col-md-4">
        <button id='loginbtn' type="button" className="btn btn-light">Login or Create account</button>

        <div className="dropdown">
          <a className="btn btn-secondarybg-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a className="dropdown-item" href="#">Actual size</a></li>
            <li><a className="dropdown-item" href="#">Fit to width</a></li>
            <li><a className="dropdown-item" href="#">Fit to screen</a></li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default NavBar