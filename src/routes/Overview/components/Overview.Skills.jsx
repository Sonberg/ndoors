import React from 'react'
import { Row, Col } from 'react-bootstrap';
import Badge from '../../../components/Badge';
import useFetch from '../../../hooks/useFetch';
import SkillBadge from '../../../components/SkillBadge';



export default () => {

  const { loading, response = [] } = useFetch('api/skills?include=Verifications.user');

  if (loading) { return null; }
  if (!response || !response.length) { return null; }

  return (
    <>
      <Row className="mt-4">
        <Col>
          <h4>Skills</h4>
        </Col>
      </Row>
      <Row>
        <Col xs="12" className="d-flex flex-wrap">
          {response.map(x => <SkillBadge key={x.value} {...x} />)}
        </Col>
      </Row>
    </>
  );
}

const Skill = ({ value, verifications }) => (
  <Col xs="6" className="mt-2">
    <Badge value={value} children={verifications.length} />
  </Col>
)