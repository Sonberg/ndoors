import React, { Component } from "react"
import AutoComplete from "../../../components/AutoComplete"
import Input from "../../../components/InputField"
import Button from "../../../components/Button"

export default class Box extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  generateInputs() {
    let designArray = [2, 1]
    let inputArray = ["Input", "Input", "Autocomplete"]
    let k = 0
    let row = true
    let input = ""
    for (let i = 0; i < inputArray.length; i++) {
      row = false
      component = inputArray[i]
      if (designArray[k] == i - 1) {
        k = k + 1 //new row
        row = true
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: "32px" }}>Who's your reference?</h3>
          </div>
          <form>
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
            <div className="col s5 offset-s1">
              <Input
                name="referentEmail"
                label="E-mail"
                value={this.props.details.referentEmail}
                onChange={this.props.onChange}
              />
            </div>
            <div className="col s5">
              <Input
                name="referentPhoneNumber"
                label="Phone number"
                value={this.props.details.referentPhoneNumber}
                onChange={this.props.onChange}
              />
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
