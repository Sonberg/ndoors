import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

const form = () => {
  return (
    <>
      <Row>
        <Col>
          <p>
            Write a message or recommendation
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Field
            component={FormInput}
            name="message"
            as="textarea" />
        </Col>
      </Row>
    </>
  )
}

form.validate = values => ({});

export default form