import React, { Component } from 'react'
import BoxFirst from '../components/BoxFirst'
import BoxSecond from '../components/BoxSecond'
import BoxThird from '../components/BoxThird'
import BoxFourth from '../components/BoxFourth'
import BoxFifth from '../components/BoxFifth'

export default class AddReferences extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.saveToArray = this.saveToArray.bind(this)
    this.state = {
      referenceState: 1,
      referenceDetails: {
        referentName: '',
        referentRole: '',
        referentPhoneNumber: '',
        referentEmail: '',
        skills: [],
        abilities: [],
        role: '',
        responsibility: '',
        workplace: '',
        dateFrom: '',
        dateTo: '',
        note: '',
        name: '',
        email: '',
        currentRole: ''
      }
    }
  }
  onContinue() {
    this.setState({ referenceState: this.state.referenceState + 1 })
  }
  onBackward() {
    this.setState({ referenceState: this.state.referenceState - 1 })
  }
  onChange({ target }) {
    this.setState({
      referenceDetails: {
        ...this.state.referenceDetails,
        [target.id]: target.value
      }
    })
  }

  saveToArray({ target }) {
    this.setState({
      referenceDetails: {
        ...this.state.referenceDetails,
        [target.id]: [
          ...(this.state.referenceDetails[target.id] || []),
          target.value
        ]
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
          />
        )
        break
      case 3:
        referencePage = (
          <BoxThird
            onBackward={() => this.onBackward()}
            onContinue={() => this.onContinue()}
            onSelect={this.saveToArray}
            details={this.state.referenceDetails}
          />
        )
        break
      case 4:
        referencePage = (
          <BoxFourth
            onBackward={() => this.onBackward()}
            onContinue={() => this.onContinue()}
            onChange={this.onChange}
            details={this.state.referenceDetails}
          />
        )
        break
      case 5:
        referencePage = (
          <BoxFifth
            onBackward={() => this.onBackward()}
            onContinue={() => this.onContinue()}
            onChange={this.onChange}
            details={this.state.referenceDetails}
          />
        )
        break
      default:
        referencePage = <h1>END</h1>
    }

    return (
      <div
        style={{
          marginTop: '100px',
          height: '100vh',
          backgroundImage: `url(${require('./../assets/BGK.svg')})`
        }}
      >
        {referencePage}
      </div>
    )
  }
}
