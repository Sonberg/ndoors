import React, { Component } from 'react'
import Button from './Button'

export default class BoxSixth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card ">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px', fontWeight: 'bolder' }}>
              One last thing...
            </h3>
          </div>
          <div className="col s11 offset-s1">
            <p
              style={{ fontSize: '18px', fontWeight: 'bolder', margin: '0px' }}
            >
              We need to know you're you.
            </p>
          </div>
          <div className="col s11 offset-s1">
            <p style={{ fontSize: '18px' }}>
              We’ve sent you an e-mail.
              <br /> When you’ve verified, your reference request will be sent.
            </p>
          </div>
          <div className="row" style={{ marginTop: '0px' }}>
            <p
              style={{ marginTop: '0px', marginBottom: '0px' }}
              className="col s4 offset-s1"
            >
              Didn't receive an email?
            </p>
          </div>
          <div className="row">
            <Button className="col s2 offset-s1 btn-small ">
              resend email
            </Button>
          </div>
          <div className="row">
            <Button
              className="col s2 offset-s9 btn-large"
              onClick={() => this.props.onContinue()}
            >
              GOT IT!
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
