import React, { Component } from 'react'
import AutoComplete from './AutoComplete'
import Input from './InputField'

export default class BoxSecond extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3>List your competencies</h3>
          </div>
          <form>
            <div className="row">
              <div className="col s5 offset-s1 " style={{}}>
                <AutoComplete
                  name="skills"
                  onSelect={this.props.onSelect}
                  url="api/csv/skills"
                  label="Skill(ex. truckvana, python"
                />
              </div>
              {/* //TODO:: */}
              <div className="col s5">
                <AutoComplete
                  value={this.props.myRole}
                  onSelect={this.props.onSelect}
                  url="api/csv/abilities"
                  label="Ability(Ex. detaljfokuserad, analytisk"
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
