import React, { Component } from 'react'
import AutoComplete from '../../../components/AutoComplete'
import Input from '../../../components/InputField'
import Button from '../../../components/Button'

export default class BoxFirst extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px' }}>Who's your reference?</h3>
          </div>
          <form>
            <div>
              <div className="row">
                <div className="col s6 offset-s1">
                  <Input
                    name="referentName"
                    label="Referent name"
                    value={this.props.details.referentName}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col s6 offset-s1">
                  <AutoComplete
                    value={this.props.details.referentRole}
                    onChange={this.props.onChange}
                    url="api/csv/professions"
                    label="Their role"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col s5 offset-s1 " style={{}}>
                <Input
                  name="referentEmail"
                  label="E-mail"
                  value={this.props.details.referentEmail}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="col s5" style={{}}>
                <Input
                  name="referentPhoneNumber"
                  label="Phone number"
                  value={this.props.details.referentPhoneNumber}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
          </form>
          <div className="row">
            <Button
              className="col s2 offset-s9 btn-large"
              onClick={() => this.props.onContinue()}
            >
              Continue
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
