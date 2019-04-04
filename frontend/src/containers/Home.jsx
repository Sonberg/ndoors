import React, { Component, Fragment } from 'react'
import { Container } from 'react-bootstrap'
import Navigation from '../components/Navigation'
import Box from '../components/Box'

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <Container className="pt-3">
          <Box />
        </Container>
      </Fragment >
    )
  }
}
