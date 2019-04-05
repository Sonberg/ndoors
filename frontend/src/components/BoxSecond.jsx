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
            <h3 style={{ fontSize: '32px' }}>Describe your relation</h3>
          </div>
          <form>
            <div className="row">
              <div className="col s5 offset-s1 " style={{}}>
                <Input
                  name="workplace"
                  label="We worked together at"
                  value={this.props.details.workplace}
                  onChange={this.props.onChange}
                />
              </div>
              <div className="col s5">
                <Input
                  name="responsibility"
                  label="My main responsibility was"
                  value={this.props.details.responsibility}
                  onChange={this.props.onChange}
                />
              </div>
            </div>
            <div className="row">
              <div className="col s5 offset-s1">
                <AutoComplete
                  value={this.props.details.role}
                  onChange={this.props.onChange}
                  url="api/csv/professions"
                  label="my role was"
                />
              </div>
            </div>
            <div className="row" style={{ marginBottom: '0' }}>
              <div className="col s1 offset-s1">From</div>{' '}
              <div className="col s1 offset-s4">To</div>
            </div>
            <div className="row valign-wrapper">
              <i className="material-icons col s1 offset-s1">date_range</i>
              <div className="col">
                <Input
                  name="dateFrom"
                  label="YY-MM-DD"
                  value={this.props.details.dateFrom}
                  onChange={this.props.onChange}
                />
              </div>
              <i className="material-icons col s1 offset-s1" style={{}}>
                date_range
              </i>
              <div className="col ">
                <Input
                  name="dateTo"
                  label="YY-MM-DD"
                  value={this.props.details.dateTo}
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
