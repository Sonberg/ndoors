import React from 'react'
import FormInputError from './Form.Input.Error'
import { Form } from 'react-bootstrap';

export default ({ input: { value, ...input }, meta, label, ...props }) => (
  <Form.Check id={`${input.name}-${label}`} custom>
    <Form.Check.Input
      type="checkbox"
      {...input}
      {...props}
    />
    <Form.Check.Label children={label} />
    <FormInputError {...meta} />
  </Form.Check>
);