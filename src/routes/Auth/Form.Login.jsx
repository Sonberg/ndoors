import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import { Form, Field } from 'react-final-form'
import { Redirect } from 'react-router-dom'
import { useAuth } from '../../context/auth';
import FormInput from '../../components/Form.Input';

const successLogin = {
    email: "per.sonberg@gmail.com",
    password: "hej1"
};

export default ({ history }) => {
    const [error, setError] = useState(null);
    const auth = useAuth();

    const validate = ({ email, password }) => {
        console.log(auth);
        
        return email && password ? null : { email: true, password: true };
    }

    const onSubmit = async (values) => {
        const response = await auth.login({ ...successLogin, ...values });

        if (!response) {
            setError("Fel e-post eller lösenord")
            return;
        }
        history.push('/')
    }

    return (
        <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, invalid }) => (
            <form onSubmit={handleSubmit}>
                <Field component={FormInput} name="email" autoComplete="email" type="email" placeholder="Email" />
                <Field component={FormInput} name="password" autoComplete="current-password" type="password" placeholder="Password" />
                <div className="mb-3">
                    <small children={error} className="text-danger" />
                </div>
                <Button variant="primary" type="submit" children="Sign in" className="mt-3" disabled={invalid} />
            </form>)} />
    );
}