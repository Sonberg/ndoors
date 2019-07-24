import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormSelectMany from '../../../components/Form.Select.Many';
import { Field } from 'react-final-form';

const form = () => {

  const references = [
    { id: 1, name: 'Hanna Ohlsson' },
    { id: 2, name: 'Alvin Jönsson' },
    { id: 3, name: 'Freddan' }
  ]

  return (
    <Row>
      <Col>
        <Field component={FormSelectMany} options={references} name="references" />
      </Col>
    </Row>
  )
}

form.validate = values => ({});

export default form