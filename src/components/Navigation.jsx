import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { compose, bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Link from './Link';
import { actionCreators } from '../store/Auth';
import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = ({ user, isAuthenticated, logout }) => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
        <Link className="navbar-brand" to={'/'}>ndoors</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {isAuthenticated ? <AuthenticatedLinks /> : <PublicLinks />}
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

const AuthenticatedLinks = () => (
  <Nav className="ml-auto">
    <Link className='nav-link' to={'/overview'}>Overview</Link>
    <Link className='nav-link' to={'/my-reference'}>My references</Link>
    <Link className='nav-link' to={'/share-references'}>My Shared Links</Link>
    <Link className='nav-link'>People I've referenced</Link>
  </Nav>
)

const PublicLinks = () => (
  <Nav className="ml-auto">
    <Link className='nav-link'>Contact</Link>
    <Link className='nav-link'>About Us</Link>
    <Link className='nav-link' to={'/auth'}>Login</Link>
    <Link className='nav-link'>Language</Link>
  </Nav>
)

const withConnect = connect(
  state => state.auth,
  dispatch => bindActionCreators(actionCreators, dispatch)
)

export default compose(withRouter, withConnect)(Navigation)

