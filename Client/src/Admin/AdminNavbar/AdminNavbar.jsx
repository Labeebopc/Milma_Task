import React from 'react'
import { Link } from 'react-router-dom'
import './AdminNavbar.css'

function AdminNavbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">

      <div className="navbar-nav col-md-4">
        <i class="bi bi-credit-card-2-front"></i>
        <i className="bi bi-chat"></i>
      </div>

      {/* Navbar Center Item */}

      <div className="headname col-md-4">
        <h4 className="headnametitle">ADMIN Panel</h4>
      </div>

      {/* Navbar Right end Item */}

      <div className="login-section col-md-4">
        <Link to='/AdminLogin' id='loginbtn' type="button" className="btn btn-light">Login</Link>

        <div className="dropdown">
          <a className="btn btn-secondarybg-dark dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
            Options
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><Link to='/AdminSignup' className="dropdown-item">Create Account</Link></li>
            <li><Link to='/AdminProducts' className="dropdown-item">View All Products</Link></li>
            <li><Link to='/AdminHome' className="dropdown-item">Log Out</Link></li>
          </ul>
        </div>
      </div>

    </nav>
  )
}

export default AdminNavbar