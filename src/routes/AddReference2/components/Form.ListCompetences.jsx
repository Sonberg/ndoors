import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

export default ({}) => {
    const validate = ({}) => {
    }

    const onSubmit = async (values) => {
    }

    return (
        <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
                <Field component={FormInput} name="list_competences" type="text" placeholder="List Competences" />
            </form>)} />
    );
}