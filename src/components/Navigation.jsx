import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as M from 'materialize-css'
import Link from './Link';

class Navigation extends Component {
  constructor(props) {
    super(props)

    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    this.props.history.push('/')
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.sidenav')
      M.Sidenav.init(elems)
    })
  }

  render() {
    const navBarStyling = {
      backgroundColor: '#6C9F9B'
    }

    return (
      <React.Fragment>
        <nav style={navBarStyling}>
          <div className="nav-wrapper">
            <div className="row">
              <div className="col s12">
                <a href="/" className="brand-logo">
                  ndoors
                </a>
                <a data-target="mobile-menu" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {localStorage.getItem('loggedIn') ? <Links /> : null}
                  <li>
                    <Link to="/" onClick={this.logOut}>
                      {localStorage.getItem('user') || 'Logga ut'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {localStorage.getItem('loggedIn') ? (
          <ul className="sidenav" id="mobile-menu">
            <Links />
          </ul>
        ) : null}
      </React.Fragment>
    )
  }
}

export default withRouter(Navigation)

const Links = () => (
  <React.Fragment>
    <li children={<Link to="/">Overview</Link>} />
    <li children={<Link to="/overview">My references</Link>} />
    <li children={<Link to="/share-references">Shared references</Link>} />
    <li children={<Link to="/overview">People I've referenced</Link>} />
  </React.Fragment>
)
