import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import Login from "../login/Login";
import jobs from "../jobs";
import Jobs from "../jobs";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item" >
            <NavLink className="nav-link" to="/jobs">
              Jobs 
            </NavLink>
          </li>
          
        </ul>
      </div>
      <div className="float right">
        Username
      </div>
  </nav>
  </>
  );
}

Header.propTypes = {};

export default Header;
