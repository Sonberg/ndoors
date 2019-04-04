import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <button onClick={() => this.props.onContinue()}>step 1</button>
      </div>
    )
  }
}
