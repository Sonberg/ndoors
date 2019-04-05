import React, { Component } from 'react'
import AutoComplete from './AutoComplete'

export default class BoxSecond extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  renderChip(value) {
    return (
      <div
        style={{ textTransform: 'capitalize', backgroundColor: '#F2F6F6' }}
        key={value}
        className="chip"
      >
        {value}
        <i className="close material-icons">close</i>
      </div>
    )
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px' }}>List your competencies</h3>
          </div>
          <form>
            <div className="row">
              <div className="col s5 offset-s1 ">
                <AutoComplete
                  name="skills"
                  onSelect={this.props.onSelect}
                  url="api/csv/skills"
                  label="Skill(ex. truckvana, python"
                />
                {this.props.details.skills.map(this.renderChip)}
              </div>
              <div className="col s5">
                <AutoComplete
                  name="abilities"
                  onSelect={this.props.onSelect}
                  url="api/csv/abilities"
                  label="Ability(Ex. detaljfokuserad, analytisk"
                />
                {this.props.details.abilities.map(this.renderChip)}
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
              Continue
            </button>
          </div>
        </div>
      </div>
    )
  }
}
