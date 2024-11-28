import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} shadow-sm`}
      style={{
        backgroundColor: props.mode === 'light' ? '#f8f9fa' : '#343a40',
        transition: 'background-color 0.3s ease',
      }}
    >
      <div className="container-fluid">
        {/* Brand logo */}
        <Link
          className="navbar-brand fw-bold"
          to="/"
          style={{
            color: props.mode === 'light' ? '#343a40' : '#f8f9fa',
            fontSize: '1.5rem',
            letterSpacing: '0.5px',
          }}
        >
          {props.title}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active"
                to="/"
                style={{
                  color: props.mode === 'light' ? '#343a40' : '#f8f9fa',
                  fontWeight: '500',
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                style={{
                  color: props.mode === 'light' ? '#343a40' : '#f8f9fa',
                  fontWeight: '500',
                }}
              >
                About
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            {/* Theme toggle */}
            <div
              className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} ms-3`}
            >
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label ms-1"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
};

Navbar.defaultProps = {
  title: 'Set Title Here',
  mode: 'light',
};
