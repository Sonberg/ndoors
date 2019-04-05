import React, { Component } from 'react'
import Input from './InputField'
import { withRouter } from 'react-router'

export default class BoxSeventh extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row card ">
          <div className="col s11 offset-s1">
            <h3 style={{ fontSize: '32px' }}>
              Welcome aboard {this.props.details.name},
            </h3>
          </div>
          <div className="col s11 offset-s1">
            <p style={{ fontSize: '18px', fontWeight: 'bold', margin: '0px' }}>
              We've sent your reference request.
            </p>
          </div>
          <div className="col s11 offset-s1">
            <p style={{ fontSize: '14px' }}>
              To view status, manage your references and share them to future
              employers - create an account!
            </p>
          </div>
          <form>
            <div>
              <div className="row">
                <div className="col s5 offset-s1 ">
                  <Input
                    name="password"
                    type="password"
                    label="password"
                    value={this.props.details.password}
                    onChange={this.props.onChange}
                  />
                  <p>
                    <label>
                      <input type="checkbox" class="filled-in" />
                      <span>I accept terms and conditions</span>
                    </label>
                  </p>
                </div>
                <div className="col s5 offset-s1 ">
                  <Input
                    name="passwordConfirm"
                    type="password"
                    label="Confirm password"
                    value={this.props.details.passwordConfirm}
                    onChange={this.props.onChange}
                  />
                </div>
              </div>
            </div>
          </form>
          <div className="row">
            <button
              className="col s2 offset-s9 waves-effect waves-light btn center-align"
              onClick={
               // export default withRouter(Navigation)


              }
            >
              ENTER NDOORS
            </button>
          </div>
        </div>
      </div>
    )
  }
}
