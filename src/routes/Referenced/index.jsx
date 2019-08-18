import React from 'react'
import useFetch from '../../hooks/useFetch';
import { useAuth } from '../../context/auth';
import { Container, Col, Row, Card } from 'react-bootstrap';

export default () => {
  const { user } = useAuth();

  // Requests i have denied
  const deniedRequestsRequest = useFetch(`api/requests?filter[status]=Denied&filter[userId]=${user && user.id}&include=createdBy`);

  // References i have given
  const referenceRequest = useFetch(`api/references?filter[createdByUserId]=${user && user.id}&include=user`);

  // Ska man kunna redigera en skapad referens?
  // Ska man kunna godkämnna en tidigare nekad reference.
  // Inaktivera en aktiv reference.

  if (deniedRequestsRequest.loading || referenceRequest.loading) {
    return null;
  }

  const denied = deniedRequestsRequest.response || [];
  const references = referenceRequest.response || [];

  return (
    <Container className="mt-5">

      <Row>
        <Col>
          <h2>People I've referenced</h2>
        </Col>
      </Row>
      {references.map(x => <Reference key={x.id} {...x} />)}
      <Row>
        <Col>
          <h3 className="mt-3">Denied requests</h3>
        </Col>
      </Row>
      {denied.map(x => <Request key={x.id} {...x} />)}
    </Container>
  );
}

const Request = ({ createdBy, created }) => (
  <Card>
    <Card.Body>
      <Row className="align-items-center">
        <Col>
          {createdBy.displayName}
        </Col>
        <Col xs="auto" as="small" className="text-muted">
          {created}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);

const Reference = ({ user, created }) => (
  <Card>
    <Card.Body>
      <Row>
        <Col>
          {user.displayName}
        </Col>
        <Col xs="auto" as="small" className="text-muted">
          {created}
        </Col>
      </Row>
    </Card.Body>
  </Card>
);