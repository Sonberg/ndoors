import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

export default ({ }) => {
    const validate = ({ }) => {
    }

    const onSubmit = async (values) => {
    }

    return (
        <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
                <Field component={FormInput} name="r_fname" type="text" placeholder="First name of the referent" />
                <Field component={FormInput} name="r_lname" type="text" placeholder="Last name of the referent" />
                <Field component={FormInput} name="email" type="text" placeholder="Email of the referent" />
                <Field component={FormInput} name="phonenumber" type="phonenumber" placeholder="Phone number of the referent" />
            </form>)} />
    );
}