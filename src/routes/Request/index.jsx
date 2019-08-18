import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
import StepContainer from '../../components/Step.Container';
import Button from '../../components/Button';


export default ({ match }) => {

  if (!match.isExact) {
    return null;
  }

  const response = useFetch(`api/requests/${match.params.request_id}?include=createdBy`);

  if (!response) {
    return null;
  }


  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h3>Reference request</h3>
          {response.created}
        </Col>
      </Row>

      <Row className="mt-5">
        <Col>
          <p className="border p-3">{response.note}</p>
        </Col>
      </Row>

      <Row className="mt-3">
        <Col>

          <Button size="lg" to={'/overview'} variant="danger" className="mr-3">Deny</Button>
          <Button size="lg" variant="secondary" to={`/requests/${match.params.request_id}/approve`}>Approve request</Button>
        </Col>
      </Row>
    </Container>
  );
}