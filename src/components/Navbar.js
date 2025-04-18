import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">{props.aboutText}</Link>
            </li>
          </ul>
          {/* Theme Buttons */}
          <div className="d-flex">
            <button className="btn btn-primary mx-1" onClick={() => props.changeThemeColor('light')}>Light</button>
            <button className="btn btn-secondary mx-1" onClick={() => props.changeThemeColor('dark')}>Dark</button>
            <button className="btn btn-info mx-1" onClick={() => props.changeThemeColor('blue')}>Blue</button>
            <button className="btn btn-success mx-1" onClick={() => props.changeThemeColor('green')}>Green</button>
            <button className="btn btn-danger mx-1" onClick={() => props.changeThemeColor('red')}>Red</button>
            {/* <button className="btn btn-warning mx-1" onClick={() => props.changeThemeColor('yellow')}>Yellow</button> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
  changeThemeColor: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'About'
};
