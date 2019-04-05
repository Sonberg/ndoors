import React, { Component } from 'react'
import Input from './InputField'

export default class BoxFourth extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px' }}>Leave a personal note</h3>
          </div>
          <form>
            <div className="row">
              <div className="col s10 offset-s1 ">
                <Input
                  name="note"
                  label="Hi, [name] would you like to be my reference..."
                  value={this.props.details.note}
                  onChange={this.props.onChange}
                />
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
