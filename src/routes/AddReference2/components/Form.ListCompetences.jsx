import React from 'react'
import { Row, Col } from 'react-bootstrap';
import { Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

const form = () => (
    <Row>
        <Col>
            <Field
                component={FormInput}
                name="competences"
                as="textarea"
                type="text"
                label="List Competences" />
        </Col>
    </Row>
);

form.validate = () => ({});

export default form;