import React from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form'
import FormInput from '../../components/Form.Input';

export default () => {

  const onSubmit = values => {
    console.log(values);

  }

  const validate = values => {
    const errors = {};

    if (!values.name) {
      errors.name = 'Du måste ange namn'
    }

    if (!values.email) {
      errors.email = 'Du måste ange e-postadress'
    }

    if (!values.password) {
      errors.password = 'Du måste ange ett lösenord'
    }

    if (values.password && validate.password !== values.repeatPassword) {
      errors.repeatPassword = 'Lösenorden matchar inte'
    }

    return errors;
  }

  return (
    <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, pristine, invalid }) => (
      <form onSubmit={handleSubmit}>
        <Field component={FormInput} name="name" type="text" placeholder="Namn" />
        <Field component={FormInput} name="email" autoComplete="email" type="email" placeholder="Epost" />
        <Field component={FormInput} name="password" autoComplete="new-password" type="password" placeholder="Lösenord" />
        <Field component={FormInput} name="repeatPassword" type="password" autoComplete="new-password" placeholder="Upprepa lösenord" />
        <Button variant="primary" type="submit" children="Sign up" className="mt-3" />
      </form>)} />
  )
}