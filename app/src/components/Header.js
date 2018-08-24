import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div className="masthead">
          <h3 className="text-muted">STUDY NOTES</h3>
          <div className="navbar navbar-dark bg-dark mb-0">
            <div className="container">
              <Link className="nav-link text-white" to="/">Home</Link>
              <div className="navbar-nav right">
                <Link className="text-white" to="/notes">Notes</Link>
              </div>
            </div>
        </div>
      </div>
    )
  }
}

export default Header;
