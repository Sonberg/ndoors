import React, { Component } from 'react'
import Input from './InputField'

export default class BoxFifth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px' }}>
              First, tell us something about you
            </h3>
          </div>
          <div className="col s11 offset-s1">
            <p style={{ fontSize: '18px' }}>
              We've saved your reference request and it will be sent after
              you've verified yourself.
            </p>
          </div>
          <form>
            <div className="row">
              <div className="col s6 offset-s1 ">
                <Input
                  name="name"
                  label="Your name"
                  value={this.props.details.name}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6 offset-s1 ">
                <Input
                  name="currentRole"
                  label="Role"
                  value={this.props.details.currentRole}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s6 offset-s1 ">
                <Input
                  name="email"
                  label="E-mail"
                  value={this.props.details.email}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
          </form>
          <div className="row">
            <button
              className="col s2 offset-s1 waves-effect waves-light btn"
              onClick={() => this.props.onBackward()}
            >
              Back
            </button>
            <button
              className="col s2 offset-s6 waves-effect waves-light btn center-align"
              onClick={() => this.props.onContinue()}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  }
}
