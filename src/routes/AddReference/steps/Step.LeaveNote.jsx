import React, { useState } from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import { Form, Field } from 'react-final-form';
import FormInput from '../../../components/Form.Input';

const form = () => (
    <Row>
        <Col>
            <Field
                component={FormInput}
                name="note"
                as="textarea"
                label="Leave personal note" />
        </Col>
    </Row>
);

form.validate = () => ({});

export default form;