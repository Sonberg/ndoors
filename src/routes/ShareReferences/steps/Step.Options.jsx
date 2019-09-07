import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';
import FormCheckInput from '../../../components/Form.Input.Check';
import FormSelectOne from '../../../components/Form.Select.One';
import FormInput from '../../../components/Form.Input';
import FormInputCheck from '../../../components/Form.Input.Check';
import FormInputTags from '../../../components/Form.Input.Tags';

const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const options = [
  { id: 'none', name: 'Anyone with link can view' },
  { id: 'password', name: 'Protect with password' }
]

const Condition = ({ when, is, children }) => (
  <Field name={when} subscription={{ value: true }}>
    {({ input: { value } }) => (value === is ? children : null)}
  </Field>
)

const form = () => {
  return (
    <Row>
      <Col>
        <Form.Group>
          <Form.Label className="my-2">Expiration</Form.Label>
          <Field name="neverExpires" component={FormInputCheck} type="checkbox" label="Link never expires" />
          <Condition when="neverExpires" is={false}>
            <Field name="expirationDate" component={FormInput} type="date" className="mt-2" />
          </Condition>
        </Form.Group>

        <Form.Group>
          <Form.Label>Visability</Form.Label>
          <Field name="linkAuthentication" component={FormSelectOne} options={options} />
          <Condition when="linkAuthentication" is="password">
            <Field name="password" component={FormInput} placeholder="Password" />
          </Condition>
        </Form.Group>
    <hr/>
        <Field name="sendLink" component={FormCheckInput} label="Send link to people" type="checkbox" />

        <Condition when="sendLink" is={true}>
          <FieldArray
            name="notify"
            component={FormInputTags}
            className="mt-2"
            validateTag={val => emailRegex.test(val)}
            placeholder="Email" />
        </Condition>
      </Col>
    </Row>
  )
}

form.validate = ({ authenticationType, password, neverExpires, expirationDate }) => {

  const errors = {};

  if (!authenticationType) {
    errors.authenticationType = 'Visability must be set';
  }

  if (authenticationType == 'password' && !password) {
    errors.password = 'Password is required or change visability';
  }

  if (!neverExpires && !expirationDate) {
    errors.expirationDate = 'Expiration date is required'
  }

  return errors;

};

export default form