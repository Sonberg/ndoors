import React from 'react'
import Signup from './Form.Signup'
import Login from './Form.Login'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Auth = ({ match, isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/" />
  }

  return (
    <Container>
      <Row className="mt-3 mb-0">
        <Col sm="auto"><h4>Registrera dig</h4></Col>
      </Row>
      <Row>
        <Col sm="auto"><p className="text-muted">Du är en minut ifrån ett lättare liv</p></Col>
      </Row>
      <Row>
        <Col sm children={<Signup />} />
      </Row>
      <Row>
        <Col>
          <Card title="Redan medlem?">
            <Card.Body>
              <Card.Title children="Redan medlem?" />
              <Login />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default connect(state => state.auth)(Auth)