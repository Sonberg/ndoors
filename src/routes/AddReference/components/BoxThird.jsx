import React, { Component } from 'react'
import AutoComplete from '../../../components/AutoComplete'
import Button from '../../../components/Button'

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
          <div className="col s8 offset-s1">
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
            <Button
              className="col s2 offset-s1 btn-large"
              onClick={() => this.props.onBackward()}
            >
              Back
            </Button>
            <Button
              className="col s2 offset-s6 btn-large"
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
