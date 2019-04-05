import React, { Component } from 'react'
import Input from './InputField'

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
            <h3 style={{ fontSize: '32px' }}>One last thing</h3>
          </div>
          <div className="col s11 offset-s1">
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0px' }}>
              We need to know you are you.
            </p>
          </div>
          <div className="col s11 offset-s1">
            <p style={{ fontSize: '18px' }}>
              We’ve sent you an e-mail. When you’ve verified, your reference
              request will be sent.
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
            <button
              style={{
                height: '24px',
                lineHeight: '24px'
              }}
              className="waves-effect waves-light btn col s2 offset-s1"
            >
              resend email
            </button>
          </div>
          <div className="row">
            <button
              className="col s2 offset-s9 waves-effect waves-light btn center-align"
              onClick={() => this.props.onContinue()}
            >
              GOT IT!
            </button>
          </div>
        </div>
      </div>
    )
  }
}
