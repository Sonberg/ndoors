import React, { useState } from 'react'
import Signup from './Form.Signup'
import Login from './Form.Login'
import { Container, Row, Col, Card } from 'react-bootstrap';

const Auth = ({ history }) => {

  const [loginForm, setLoginForm] = useState(false);

  const imageStyle = {
    backgroundImage: `url('${'/assets/images/undraw_japan_ubgk.svg'}')`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  const Form = loginForm ? Login : Signup;

  return (
    <Container style={{ height: '80vh' }}>
      <Row className="align-items-center h-100">
        <Col lg="5" className="h-100 d-none d-lg-block" style={imageStyle} />
        <Col md="12" lg="7">
          <Card className="ml-lg-5 shadow-sm">
            <div className="p-4 border-bottom">
              <h4 className="m-0">{loginForm ? 'Sign in' : 'Create account'}</h4>
            </div>
            <Card.Body>
              <p className="text-muted mb-1">We’re thrilled you’re here! Lets get your references in order.</p>
              <div className="mb-3">
                <strong>
                  <a onClick={() => setLoginForm(!loginForm)} children={loginForm ? 'Need an account?' : 'Already a user?'} />
                </strong>
              </div>
              <Form history={history} />
              <div className="mt-3">
                <small>
                  By signing up you agree to ndoor’s Terms and Conditions and Privacy Policy.
                </small>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </Container>
  )
}

export default Auth