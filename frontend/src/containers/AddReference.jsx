import React, { Component } from 'react'
import Box from '../components/Box'

export default class AddReferences extends Component {
  constructor(props) {
    super(props)
    this.state = {
      referenceState: 1
    }
  }
  onContinue() {
    this.setState({ referenceState: this.state.referenceState + 1 })
  }
  render() {
    let referencePage
    switch (this.state.referenceState) {
      case 1:
        referencePage = (
          <div>
            <Box onContinue={() => this.onContinue()}>ads</Box>
          </div>
        )
        break
      case 2:
        referencePage = (
          <button onClick={() => this.onContinue()}>step 2</button>
        )
        break
      default:
        referencePage = <h1>END</h1>
    }

    return <div>{referencePage}</div>
  }
}
