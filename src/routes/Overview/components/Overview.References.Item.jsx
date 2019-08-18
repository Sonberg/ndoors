import React, { useState } from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillBadge from '../../../components/SkillBadge';
import Button from '../../../components/Button';
import { useAuth } from '../../../context/auth';

export default ({ user, companyName, jobTitle, reference, status, ...props }) => {

  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open)

  return (
    <Card className="shadow-sm mb-3">
      <Card.Body onClick={toggle}>
        <Row className="align-items-center">
          <Col xs="auto">
            <div style={{ height: 36, width: 36 }} className="d-flex align-items-center justify-content-center bg-dark text-white rounded-circle">
              <FontAwesomeIcon icon={iconFor(status)} />
            </div>
          </Col>
          <Col>
            <Row>
              <Col className="h6 mb-0">
                {user && user.displayName}
              </Col>
            </Row>
            <Row>
              <Col as="small">
                {jobTitle} at {companyName}
              </Col>
            </Row>
          </Col>

          <Col xs="auto" as="small" className="text-muted">
            {reference ? reference.created : props.created}
          </Col>
          <HandleRequestButton id={props.id} userId={props.userId} />
        </Row>
      </Card.Body>
      {open ? <ItemContent reference={reference} status={status} {...props} /> : null}
    </Card>
  );
}

const ItemContent = ({ note, status, reference }) => {

  switch (status) {
    case "Accepted":
      const skills = reference.skillVerifications && reference.skillVerifications.map(x => x.skill);

      return (
        <Card.Body className="border-top">
          <Row>
            <Col>
              {reference.message}
            </Col>
          </Row>
          <Row className="pt-3">
            <Col className="d-flex flex-wrap">
              {skills.map(x => <SkillBadge {...x} key={x.id} />)}
            </Col>
          </Row>
        </Card.Body>);

    case "Pending":
      if (!note) {
        return null;
      }

      return (
        <Card.Body className="border-top">
          <Row>
            <Col>
              {note}
            </Col>
          </Row>
        </Card.Body>);


  }

  return null;
}

const HandleRequestButton = ({ id, userId }) => {
  const auth = useAuth();

  if (auth.user && auth.user.id !== userId) {
    return null
  }

  return (
    <Col xs="auto">
      <Button to={`/requests/${id}/approve`} size="sm" variant="pink" children={<FontAwesomeIcon icon="chevron-right" />} />
    </Col>);
}

const iconFor = status => {
  switch (status) {
    case 'Accepted':
      return 'check';
    case 'Pending':
      return 'clock';
    case "Denied":
      return '';
  }
}