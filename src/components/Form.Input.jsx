import React from 'react'
import { Form } from 'react-bootstrap';
import FormInputError from './Form.Input.Error';

export default ({ label, input, meta, ...props }) => (
  <Form.Group>
    {label ? <Form.Label children={label} /> : null}
    <Form.Control {...props} {...input} />
    <FormInputError {...meta} />
  </Form.Group>
)