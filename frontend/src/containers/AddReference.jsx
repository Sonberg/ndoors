import React, { Component } from 'react'
import BoxFirst from '../components/BoxFirst'
import BoxSecond from '../components/BoxSecond'
import AutomComplete from '../components/AutoComplete'

export default class AddReferences extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.state = {
      referenceState: 2,
      referenceDetails: {
        name: '',
        referentRole: '',
        phoneNumber: '',
        email: '',
        competence: [],
        myRole: '',
        responsibility: '',
        workplace: '',
        dateFrom: '',
        dateTo: ''
      }
    }
  }
  onContinue() {
    this.setState({ referenceState: this.state.referenceState + 1 })
  }
  onBackward() {
    this.setState({ referenceState: this.state.referenceState - 1 })
  }
  addName(name) {
    this.state.referenceDetails.name = name
  }
  onChange({ target }) {
    this.setState({
      referenceDetails: {
        ...this.state.referenceDetails,
        [target.id]: target.value
      }
    })
  }

  render() {
    let referencePage
    switch (this.state.referenceState) {
      case 1:
        referencePage = (
          <div>
            <BoxFirst
              onBackward={() => this.onBackward()}
              onContinue={() => this.onContinue()}
              onChange={this.onChange}
              details={this.state.referenceDetails}
              {...this.state.referenceDetails}
            />
          </div>
        )
        break
      case 2:
        referencePage = (
          <BoxSecond
            onBackward={() => this.onBackward()}
            onContinue={() => this.onContinue()}
            onChange={this.onChange}
            details={this.state.referenceDetails}
            {...this.state.referenceDetails}
          />
        )
        break
      default:
        referencePage = <h1>END</h1>
    }

    return <div style={{ marginTop: '100px' }}>{referencePage}</div>
  }
}
