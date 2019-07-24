import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

const form = () => (
    <Row>
        <Col xs="12">
            <p>Give us some information about your referee.</p>
        </Col>
        <Col sm="12" md="6">
            <Field component={FormInput} name="firstName" type="text" label="First name" />
            <Field component={FormInput} name="lastName" type="text" label="Last name" />
        </Col>
        <Col sm="12" md="6">
            <Field component={FormInput} name="email" type="text" label="Email" />
            <Field component={FormInput} name="phoneNumber" label="Phone" />
        </Col>
    </Row>
);

form.validate = ({
    firstName,
    lastName,
    email,
    phoneNumber }) => {

    const error = {}

    if (!firstName) {
        error.firstName = 'First name is required'
    }

    if (!lastName) {
        error.lastName = 'Last name is required'
    }

    if (!email && !phoneNumber) {
        error.email = 'Phone number or email is required'
        error.phoneNumber = 'Phone number or email is required'
    }

    return error;
};

export default form;