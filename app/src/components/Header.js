import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const cursorPointer = {
  cursor: 'pointer'
}

class Header extends Component {
  renderContent(){
    switch (this.props.auth) {
      case null:
        return (
          <div className="masthead">
              <h3 className="text-muted">STUDY NOTES</h3>
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                  <Link className="nav-link text-white" to="/">Home</Link>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="text-white" href="./">Reload</a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
        );
      case false:
        return (
          <div className="masthead">
              <h3 className="text-muted">STUDY NOTES</h3>
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item ml-auto">
                      <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/notes">Notes</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-white" style={cursorPointer} id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                        <a className="dropdown-item" href="javascript: void(0);">Link</a>
                        <a className="dropdown-item" href="javascript: void(0);">Another link</a>
                        <hr />
                        <Link className="dropdown-item" to="/manage-notes">Manage Notes</Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="text-white" href="/auth/google">Sign In</a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
        );
      default:
        return (
          <div className="masthead">
              <h3 className="text-muted">STUDY NOTES</h3>
              <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="collapse navbar-collapse">
                  <ul className="navbar-nav">
                    <li className="nav-item ml-auto">
                      <Link className="nav-link text-white" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link text-white" to="/notes">Notes</Link>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-white" style={cursorPointer} id="dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                      <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown">
                        <a className="dropdown-item" href="javascript: void(0);">Link</a>
                        <a className="dropdown-item" href="javascript: void(0);">Another link</a>
                        <hr />
                        <Link className="dropdown-item" to="/manage-notes">Manage Notes</Link>
                      </div>
                    </li>
                  </ul>
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link text-white" href="/api/logout">Sign Out</a>
                    </li>
                  </ul>
                </div>
            </nav>
          </div>
        );
      }
  }

  // <li className="nav-item">
  //   <Link className="nav-link text-white" to="/signin">Sign In</Link>
  // </li>
  // <li className="nav-item">
  //   <Link className="nav-link text-white" to="/notes">Notes</Link>
  // </li>

  render() {
    return (
      <div>
      {this.renderContent()}
      </div>
    )
  }
}

// function mapStateToProps(state) {
//   return {auth: state.auth};
// }

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
