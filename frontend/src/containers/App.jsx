import React, { Component } from 'react';
import { Container } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Container className="pt-3">
          Skriv kod här!
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
