import React from 'react';
import { Row, Col } from 'react-bootstrap';
import SkillBadge from '../../../components/SkillBadge';
import { useFieldArray } from 'react-final-form-arrays';

const form = ({ skills = [] }) => {

  const { fields: { push, remove, value } } = useFieldArray('skills');
  const toggle = id => {
    value.includes(id) ? remove(value.indexOf(id)) : push(id);
  }

  return (
    <>
      <Row>
        <Col>
          <p>
            Click to choose skills & abilities to endorse
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex flex-wrap">
          {skills.map(x => <SkillBadge
            key={x.id}
            hideChildren={true}
            bg={value.includes(x.id) ? 'pink' : 'pink-light'}
            className="cursor-pointer"
            onClick={() => toggle(x.id)}
            {...x}
          />)}
        </Col>
      </Row>
    </>
  )
}

form.validate = values => ({});

export default form