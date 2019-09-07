import React from 'react'
import { FieldArray } from 'react-final-form-arrays'
import FormInputTags from '../../../components/Form.Input.Tags';

const form = () => {
    return (<FieldArray name="skills" component={FormInputTags} placeholder="Leadership, C#, Javascript etc..." />);
};

form.validate = () => ({});

export default form;