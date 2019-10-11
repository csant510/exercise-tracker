import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">CarMaintenance}</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Maintenance}</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create Maintenance} Log</Link>
          </li>
          <li className="navbar-item">
          <Link to="/car" className="nav-link">Create car</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}