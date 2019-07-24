import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Typed from 'react-typed';

export default () => (
  <Container fluid className="bg-primary py-5" style={{ height: '70vh' }}>
    <Container>
      <Row className="d-flex align-items-center">
        <Col md="6">
          <h1 style={{ color: '#fff' }}>
            Get social proof < br /> on your
                                    <span className="ml-2">
              <Typed
                strings={[
                  ' skills.',
                  ' abilities.',
                  ' experiences.',
                  ' achievements.']}
                typeSpeed={40}
                backSpeed={50}
                loop >
              </Typed>
            </span>
          </h1>
        </Col>
        <Col className="d-none d-md-block" md="6">
          <img style={{ width: '90%', height: 'auto' }} src='assets/images/saturn.svg' />
        </Col>
      </Row>
    </Container>
  </Container>
)