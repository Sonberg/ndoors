import React from 'react';
import { Row, Col } from 'react-bootstrap';

const form = () => {
  return (
    <Row>
      <Col>
      Show skills [x]
      </Col>
    </Row>
  )
}

form.validate = values => ({});

export default form