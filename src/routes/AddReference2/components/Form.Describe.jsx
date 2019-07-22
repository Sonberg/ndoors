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
                <Field component={FormInput} name="company_name" type="text" placeholder="The company you worked at" />
                <Field component={FormInput} name="job_title" type="text" placeholder="Your Job title" />
                <Field component={FormInput} name="main_responsibilty" type="text" placeholder="Your main responsibilities" />
                <Field component={FormInput} name="from_date" type="date" placeholder="From Date" />
                <Field component={FormInput} name="to_date" type="date" placeholder="To Date" />
            </form>)} />
    );
}