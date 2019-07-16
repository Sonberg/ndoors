import React from 'react'
import { Container, Row, Col, Button, Form, Card } from 'react-bootstrap';
import Link from '../../components/Link';

export default () => {

  return (
    <Form>
      <Form.Group>
        <Form.Control type="email" placeholder="Namn" />
      </Form.Group>

      <Form.Group>
        <Form.Control type="email" placeholder="Epost" />
      </Form.Group>

      <Form.Group>
        <Form.Control type="password" placeholder="Lösenord" />
      </Form.Group>

      <Form.Group>
        <Form.Control type="password" name="repeat-password" placeholder="Upprepa lösenord" />
      </Form.Group>
      <Button variant="primary" type="submit" children="Registrera" />
    </Form>
  )
}