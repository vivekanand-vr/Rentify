import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, userName, handleLogout }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">RENTIFY</Link>
      </div>
      <div className="welcome-msg">
        {isLoggedIn && <span>Welcome {userName}!</span>}
      </div>
      <div className="navbar-menu">
        <ul>
          {isLoggedIn ? (
            <>
              <li><Link to="/add-property">Add Property</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li onClick={handleLogout}>Logout</li>
            </>
          ) : (
            <>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;