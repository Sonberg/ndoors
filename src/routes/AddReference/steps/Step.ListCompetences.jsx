import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Form } from 'react-bootstrap';
import { FieldArray } from 'react-final-form-arrays'
import Badge from '../../../components/Badge';
import FormInputTags from '../../../components/Form.Input.Tags';

const form = () => {
    return (<FieldArray name="skills" component={FormInputTags} />);
};

form.validate = () => ({});

export default form;