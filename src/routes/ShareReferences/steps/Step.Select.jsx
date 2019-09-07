import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FormSelectMany from '../../../components/Form.Select.Many';
import { Field } from 'react-final-form';

const form = ({ references = [] }) => {

  return (
    <>
      {references.length ? (
        <Field
          component={FormSelectMany}
          options={references.map(x => ({ id: x.id, name: x.createdBy.displayName }))}
          name="references" />
      ) : <Empty />}
    </>
  )
}

const Empty = () => (
  <p className="m-0">You don't have any references to share</p>);


form.validate = ({ references }) => {
  if (!references || !references.length) {
    return {
      references: 'You have to select aleast one reference'
    }
  }
};

export default form