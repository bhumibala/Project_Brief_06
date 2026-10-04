import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="site-brand" to="/" end>
          Event Management System
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink className="login-link" to="/login">
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;