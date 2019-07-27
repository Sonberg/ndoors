import React from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form'
import { useAuth } from '../../context/auth';
import FormInput from '../../components/Form.Input';

const successLogin = {
    email: "per.sonberg@gmail.com",
    password: "hej1"
};

export default ({ history }) => {
    const auth = useAuth();

    const validate = ({ email, password }) => {
        return email && password ? null : { email: true, password: true };
    }

    const onSubmit = async (values) => {
        const response = await auth.login({ ...successLogin, ...values });

        if (response.errors) {
            return response.errors.reduce((prev, { param, msg }) => {
                return {
                    ...prev,
                    [param]: msg
                };
            }, {});
        }

        history.push('/overview')
    }

    return (
        <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
                <Field component={FormInput} name="email" autoComplete="email" type="email" placeholder="Email" />
                <Field component={FormInput} name="password" autoComplete="current-password" type="password" placeholder="Password" />
                <Button variant="primary" type="submit" children="Sign in" className="mt-3" disabled={invalid} />
            </form>)} />
    );
}