import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Main navigation">
        <NavLink className="site-brand" to="/" end onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">E</span>
          <span>Event Management System</span>
        </NavLink>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="nav-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`nav-links${menuOpen ? " nav-links--open" : ""}`}
          id="primary-navigation"
        >
          <NavLink to="/" end onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/dashboard" onClick={closeMenu}>Dashboard</NavLink>
          <NavLink to="/profile" onClick={closeMenu}>Profile</NavLink>
          <NavLink className="login-link" to="/login" onClick={closeMenu}>
            Login
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;