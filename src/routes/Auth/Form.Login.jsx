import React, { useState } from 'react'
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import Link from '../../components/Link';
import { post } from '../../api';

const successLogin = {
    email: "per.sonberg@gmail.com",
    password: "hej1"
};

export default () => {
    const [data, setData] = useState({});
    const [error, setError] = useState(null);

    const onSubmit = async (event) => {
        if (event && event.preventDefault) {
            event.preventDefault()
        }

        const response = await post('api/auth/login', { ...successLogin, ...data });

        if (response) {
            window.location = window.location;
        } else {
            setError("Fel e-post eller lösenord")
        }
    }

    const onChange = ({ target: { name, value } }) => {
        setData({ [name]: value });
    }

    return (
        <Form onSubmit={onSubmit}>
            <Form.Group>
                <Form.Control type="email" name="email" placeholder="Epost" onChange={onChange} />
            </Form.Group>

            <Form.Group>
                <Form.Control type="password" name="password" placeholder="Lösenord" onChange={onChange} />
            </Form.Group>
            <div className="mb-3">
                <strong children={error} className="text-danger" />
            </div>
            <Button variant="primary" onClick={onSubmit} children="Logga in" />
        </Form>
    )
}