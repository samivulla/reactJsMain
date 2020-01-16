import React, { Component } from "react";
import {
  Button,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import {
 Link
} from "react-router-dom";
class header extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <ul className="navbar-nav mr-auto">
          <li><Link to={'/home'} className="nav-link"> Home </Link></li>
          <li><Link to={'/detail'} className="nav-link">Details</Link></li>
          <li><Link to={'/feature'} className="nav-link">Feature</Link></li>
          <li><Link to={'/login'} className="nav-link">Login</Link></li>
        </ul>
        </nav>
    );
  }
}

export default header;
