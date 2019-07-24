import React from 'react'
import FormInputError from './Form.Input.Error'
import { Form } from 'react-bootstrap';

export default ({ input, meta, label, ...props }) => (
  <Form.Check type="checkbox" id={`${input.name}-${label}`} custom>
    <Form.Check.Input
      type="checkbox"
      defaultChecked={input.value}
      {...input}
      {...props}
    />
    <Form.Check.Label children={label} />
    <FormInputError {...meta} />
  </Form.Check>
);