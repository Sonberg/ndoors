import React from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form'
import FormInput from '../../components/Form.Input';
import { post } from '../../api';

export default ({ history }) => {

  const onSubmit = async values => {
    const response = await post('api/auth/signup', values);

    if (response.errors) {
      return response.errors.reduce((prev, { param, msg }) => {
        return {
          ...prev,
          [param]: msg
        };
      }, {});
    }

    if (response && response.isAuthenticated) {
      history.push('/overview')
    }
  }

  const validate = async ({ email, name, password, repeatPassword }) => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required'
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
          <Field component={FormInput} name="name" type="text" placeholder="Namn" />
          <Field component={FormInput} name="email" autoComplete="email" type="email" placeholder="Epost" />
          <Field component={FormInput} name="password" autoComplete="new-password" type="password" placeholder="Lösenord" />
          <Field component={FormInput} name="repeatPassword" type="password" autoComplete="new-password" placeholder="Upprepa lösenord" />
          <Button variant="primary" type="submit" children="Sign up" className="mt-3" disabled={submitting} />
        </form>)} />
  )
}