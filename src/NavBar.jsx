import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import logo1 from './assets/Logo1.png';

export default function NavBar({user}) {
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <>
    
    <nav className="navbar fixed-top navbar-dark custom-navbar navbar-expand-lg" style={{height: '5rem'}}>
    <div className="container-fluid mx-3 d-flex align-items-center">
          <img
            src={logo1}  // Use public path
            alt="Logo"
            width="55"
            height="45"
            className="d-inline-block align-top me-2"
          />
        <Link className="navbar-brand" style={{color:'aqua'}} to='/'>Smart Student Hub</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/Events">Events</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/LeaderBoard">LeaderBoard</Link>
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
                Hello, {user.displayName.split(" ")[0]}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <Link to="/LoginPage">
              <Button title="Sign Up" />
            </Link>
          )}
        </div>
    </div>
    </nav>
    </>
  )
}
