import React, { Component } from 'react'
import Input from './InputField'
import Button from './Button'

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
                  label={`Hi ${
                    this.props.details.referentName
                  }, would you like to be my reference...`}
                  value={this.props.details.note}
                  onChange={this.props.onChange}
                />
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
              Submit
            </Button>
          </div>
        </div>
      </div>
    )
  }
}
