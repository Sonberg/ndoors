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
            <Field component={FormInput} name="firstName" type="text" label="Given name *" />
            <Field component={FormInput} name="lastName" type="text" label="Surname *" />
        </Col>
        <Col sm="12" md="6">
            <Field component={FormInput} name="email" type="text" label="Email" />
        </Col>
    </Row>
);

form.validate = ({
    firstName,
    lastName,
    email }) => {

    const error = {}

    if (!firstName) {
        error.firstName = 'Given name is required'
    }

    if (!lastName) {
        error.lastName = 'Surname is required'
    }


    if (!email) {
        error.email = 'Email is required'
    }

    return error;
};

export default form;