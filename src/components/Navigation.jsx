import React from 'react'
import Link from './Link';
import { Navbar, Nav, Container, Image } from 'react-bootstrap';
import { useAuth } from '../context/auth';


export default () => {
  const { user, logout, isAuthenticated } = useAuth();
  
  const AuthenticatedLinks = () => (
    <Nav className="ml-auto align-items-center">
      <Link className='nav-link' to={'/overview'}>Overview</Link>
      <Link className='nav-link' to={'/my-reference'}>My references</Link>
      <Link className='nav-link' to={'/share-references'}>My Shared Links</Link>
      <Link className='nav-link'>People I've referenced</Link>
      <Image
        src={user && user.image}
        style={{ height: '32px', width: '32px', borderWidth: '2px !important' }}
        className="rounded-circle border border-white"
        onClick={logout} />
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


