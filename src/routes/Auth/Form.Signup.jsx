import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { Form, Field } from 'react-final-form'
import FormInput from '../../components/Form.Input';
import { post } from '../../api';
import { useAuth } from '../../context/auth';

export default ({ history }) => {

  const { login } = useAuth();

  const onSubmit = async values => {
    const response = await post('api/users', {
      ...values,
      type: 'user'
    });

    if (response.errors) {
      return response.errors.reduce((prev, { param, msg }) => {
        return {
          ...prev,
          [param]: msg
        };
      }, {});
    }

    const loginResponse = await login({ email: values.email, password: values.password });

    if (loginResponse) {
      history.push('/overview')
    }
  }

  const validate = async ({ email, firstName, lastName, password, repeatPassword }) => {
    const errors = {};

    if (!firstName) {
      errors.firstName = 'Given name is required'
    }

    if (!lastName) {
      errors.lastName = 'Surname is required'
    }

    if (!email) {
      errors.email = 'Email address is required'
    }

    if (!password) {
      errors.password = 'Password is required'
    }

    if (password && password !== repeatPassword) {
      errors.repeatPassword = "Password don't match"
    }

    return errors;
  }

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, submitting }) => (
        <form onSubmit={handleSubmit}>
          <Row>
            <Col xs="12" md="6">
              <Field component={FormInput} name="firstName" type="text" placeholder="Given name *" />
            </Col>
            <Col xs="12" md="6">
              <Field component={FormInput} name="lastName" type="text" placeholder="Surname *" />
            </Col>
          </Row>
          <Field component={FormInput} name="email" autoComplete="email" type="email" placeholder="Email *" />
          <Field component={FormInput} name="phoneNumber" autoComplete="phone" placeholder="Phone number" />
          <Field component={FormInput} name="password" autoComplete="new-password" type="password" placeholder="Password *" />
          <Field component={FormInput} name="repeatPassword" type="password" autoComplete="new-password" placeholder="Repeat password *" />
          <Button variant="primary" type="submit" children="Sign up" className="mt-3" disabled={submitting} />
        </form>)} />
  )
}