import React from 'react'

export default ({ name, label, onChange, value, type }) => (
  <div className="input-field ">
    <input type={type || 'text'} id={name} value={value} onChange={onChange} />
    <label htmlFor={name}>{label}</label>
  </div>
)
