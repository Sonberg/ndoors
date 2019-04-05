import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Navigation extends Component {

  constructor(props) {
    super(props)

    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    this.props.history.push('/')
  }

  render() {
    const navBarStyling = {
      backgroundColor: '#6C9F9B'
    }

    return (
      <nav style={navBarStyling}>
        <div className="nav-wrapper">
          <div className="col s12">
            <a href="/" className="brand-logo">Ndoors</a>

            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {localStorage.getItem('loggedIn') ? (
                <React.Fragment>
                  <li><a>Overview</a></li>
                  <li><a>My refrences</a></li>
                  <li><a>Shared refrences</a></li>
                  <li><a>People i've referenced</a></li>
                </React.Fragment>
              ) : null}
              <li><a onClick={this.logOut}>{localStorage.getItem('user')}</a></li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navigation)
