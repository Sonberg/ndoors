import React, { Component } from 'react'
import AutoComplete from '../components/AutoComplete'
import Input from './InputField'

export default class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="card-content text-center">
            <h3>Who's your reference?</h3>
          </div>
          <form className="" style={{}}>
            <div>
              <div className="row">
                <div className="col s6 offset-s1">
                  <Input
                    name="name"
                    label="Name"
                    value={this.props.name}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s6 offset-s1">
                  <AutoComplete
                    value={this.props.role}
                    onChange={this.props.onChange}
                    url="api/csv/professions"
                    label="role"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s5 offset-s1 " style={{}}>
                <Input
                  name="email"
                  label="E-mail"
                  value={this.props.email}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="col s5" style={{}}>
                <Input
                  name="phoneNumber"
                  label="Phone number"
                  value={this.props.phoneNumber}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
          </form>
          <div className="row">
            <a
              className="col s2 offset-s1 waves-effect waves-light btn"
              onClick={() => this.props.onBackward()}
            >
              Back
            </a>
            <a
              className="col s2 offset-s6 waves-effect waves-light btn center-align"
              onClick={() => this.props.onContinue()}
            >
              Continue
            </a>
          </div>
        </div>
      </div>
    )
  }
}
