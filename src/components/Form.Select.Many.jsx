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
    <div className="p-3 border mb-3" key={id}>
      <Form.Check type="checkbox" id={`${input.name}-${id}`} custom>
        <Form.Check.Input
          type="checkbox"
          value={id}
          disabled={disabled}
          defaultChecked={value && value.map(x => x.id).includes(id)}
          onChange={onCheckboxChange(value, input)}
        />
        <Form.Check.Label children={name} />

      </Form.Check>
    </div>
  )

  const onCheckboxChange = (selected, input) => ({ target: { checked, value } }) => {

    if (checked) {
      input.onChange([...selected, normalizeOptions(options).find(x => x.id == value)]);
      return;
    }
    input.onChange(selected.filter(x => x !== value));
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