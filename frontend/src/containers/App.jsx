import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Container className="pt-3">Här var det kod!</Container>
      </React.Fragment>
    )
  }
}

export default App
