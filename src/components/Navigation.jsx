import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as M from 'materialize-css'
import Link from './Link';
import { actionCreators } from '../store/Auth';

class Navigation extends Component {

  state = {}

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', () => M.Sidenav.init(document.querySelectorAll('.sidenav')))
  }

  static getDerivedStateFromProps(props) {
    if (props.isAuthenticated && !props.user) {
      props.loadUser();
    }
    return {};
  }

  render() {
    const navBarStyling = {
      backgroundColor: '#6C9F9B'
    }
    const { user, isAuthenticated } = this.props;

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
                  {isAuthenticated ? <Links /> : null}
                  <li>
                    <Link to="/" onClick={this.logOut}>
                      {user && user.name || 'Logga ut'}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>

        {isAuthenticated ? (
          <ul className="sidenav" id="mobile-menu">
            <Links />
          </ul>
        ) : null}
      </React.Fragment>
    )
  }
}

const withConnect = connect(
  state => state.auth,
  dispatch => bindActionCreators(actionCreators, dispatch)
)

export default compose(withRouter, withConnect)(Navigation)

const Links = () => (
  <React.Fragment>
    <li children={<Link to="/">Overview</Link>} />
    <li children={<Link to="/overview">My references</Link>} />
    <li children={<Link to="/share-references">Shared references</Link>} />
    <li children={<Link to="/overview">People I've referenced</Link>} />
  </React.Fragment>
)
