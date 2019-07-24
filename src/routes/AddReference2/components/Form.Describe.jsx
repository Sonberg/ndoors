import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

const form = () => (
    <Row>
        <Col sm="12" md="6">
            <Field component={FormInput} name="companyName" type="text" label="The company you worked at" />
            <Field component={FormInput} name="jobTitle" type="text" label="Your Job title" />
        </Col>
        <Col sm="12" md="6">
            <Field component={FormInput} name="mainResponsibilty" type="text" label="Your main responsibilities" />
            <Row>
                <Col>
                    <Field component={FormInput} label="From" name="fromDate" type="date" />
                </Col>
                <Col>
                    <Field component={FormInput} label="To" name="toDate" type="date" />
                </Col>
            </Row>
        </Col>
    </Row>
);

form.validate = ({ companyName }) => {
    const error = {}

    if (!companyName) {
        error.companyName = 'Company is required'
    }

    return error;

};

export default form;