import React from 'react'
import { ColoredRow } from '../../../components/ColoredRow';
import { Container, Row, Col } from 'react-bootstrap';

export default () => (
  <Container fluid as={ColoredRow} bgColor={'fff'} flip={true}>
    <Container>
      <Row>
        <Col>
          <h1 className="text-center">
            we help job seekers gather and share references. Crowdsourcing social proof globally.
          </h1>
        </Col>
      </Row>
    </Container>
  </Container>
);