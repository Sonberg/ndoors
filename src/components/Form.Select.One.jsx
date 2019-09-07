import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import FormInputError from './Form.Input.Error';

export default ({
  options,
  label,
  className,
  meta,
  ...props }) => {

  const renderOption = ({ id, name, disabled, input: { value, meta, ...input } }) => (
    <Form.Check type="radio" id={`${input.name}-${id}`} custom key={id}>
      <Form.Check.Input
        type="radio"
        value={id}
        name={input.name}
        disabled={disabled}
        defaultChecked={value === id}
        onChange={onCheckboxChange(input)}
      />
      <Form.Check.Label children={name} />
    </Form.Check>
  )

  const onCheckboxChange = (input) => ({ target: { value } }) => {
    input.onChange(value);
  }

  return (
    <Form.Group className={className}>
      {label ? <Form.Label children={label} /> : null}
      {normalizeOptions(options).map(value => renderOption({ ...value, ...props, meta }))}
      <FormInputError {...meta} />
    </Form.Group>
  );
}

const normalizeOptions = options => (options && options.map(x => typeof (x) === 'string' ? ({ id: x, name: x }) : x)) || [];