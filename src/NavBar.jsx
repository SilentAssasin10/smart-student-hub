import React from 'react';
import Button from './Button';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from './Firebase';
import logo1 from './assets/Logo1.png';

export default function NavBar({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => navigate('/'));
  };

  // Collapse the navbar manually on link click (mobile)
  const closeNavbar = () => {
    const navbar = document.querySelector('.navbar-collapse');
    if (navbar.classList.contains('show')) {
      navbar.classList.remove('show');
    }
  };

  return (
    <nav className="navbar fixed-top navbar-dark navbar-expand-lg custom-navbar" style={{ height: '5rem' }}>
      <div className="container-fluid mx-3 d-flex align-items-center">
        <img
          src={logo1}
          alt="Logo"
          width="55"
          height="45"
          className="d-inline-block align-top me-2"
        />
        <Link className="navbar-brand" to="/" onClick={closeNavbar} style={{ color: 'aqua' }}>
          Smart Student Hub
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Events" onClick={closeNavbar}>
                Events
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/LeaderBoard" onClick={closeNavbar}>
                LeaderBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Learn" onClick={closeNavbar}>
                Learn
              </Link>
            </li>
          </ul>

          {user ? (
            <div className="dropdown">
              <button
                className="btn btn-outline-light dropdown-toggle d-flex align-items-center"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src={user.photoURL}
                  alt="profile"
                  className="rounded-circle me-2"
                  width="30"
                  height="30"
                />
                Hello, {user.displayName.split(' ')[0]}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : (   
            <Link to="/LoginPage" onClick={closeNavbar}>
              <Button title="Sign Up" />
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
