import React, { Component } from 'react'
import { withRouter } from 'react-router'

class Navigation extends Component {

  constructor(props) {
    super(props)

    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this);
  }

  logOut() {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    this.props.history.push('/')
  }

  componentDidMount() {
    if (localStorage.getItem('loggedIn')) {
      this.props.history.push('/overview');
    }
  }

  logIn() {
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('user', 'Kalle Karlsson');
    this.props.history.push('/overview')
  }

  render() {
    const navBarStyling = {
      backgroundColor: '#6C9F9B'
    }
    console.log(process.env);


    return (
      <nav style={navBarStyling}>
        <div className="nav-wrapper">
          <div className="row">
            <div className="col s12">
              <a href="/" className="brand-logo">ndoors</a>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                {localStorage.getItem('loggedIn') ? (
                  <React.Fragment>
                    {process.env.API_URL}
                    <li><a href="/">Overview</a></li>
                    <li><a href="/my-references">My references</a></li>
                    <li><a href="/shared-references">Shared references</a></li>
                    <li><a href="/">People i've referenced</a></li>
                  </React.Fragment>
                ) : <li><a onClick={this.logIn}>Login</a></li>}
                <li><a href="/" onClick={this.logOut}>{localStorage.getItem('user')}</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navigation)
