import React, { Component } from 'react'
import * as M from 'materialize-css'

export default class Input extends Component {
  componentDidMount() {
    M.updateTextFields()
  }

  render() {
    const { name, label, onChange, value, type } = this.props
    return (
      <div className="input-field" style={{ marginBottom: '0px' }}>
        <input
          type={type || 'text'}
          id={name}
          value={value}
          onChange={onChange}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    )
  }
}
