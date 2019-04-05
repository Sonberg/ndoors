import React, { Component } from 'react'
import { withRouter } from 'react-router'
import * as M from 'materialize-css'

class Navigation extends Component {

  constructor(props) {
    super(props)

    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    this.props.history.push('/')
  }


  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => {
      var elems = document.querySelectorAll('.sidenav');
      M.Sidenav.init(elems);
    });
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
                <a href="/" className="brand-logo">ndoors</a>
                <a  data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  {localStorage.getItem('loggedIn') ? (
                    <Links />
                  ) : null}
                  <li><a href="/" onClick={this.logOut}>{localStorage.getItem('user')}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {localStorage.getItem('loggedIn') ? (
          <ul className="sidenav" id="mobile-demo">
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
    <li><a href="/">Overview</a></li>
    <li><a href="/my-references">My references</a></li>
    <li><a href="/shared-references">Shared references</a></li>
    <li><a href="/">People i've referenced</a></li>
  </React.Fragment>
)