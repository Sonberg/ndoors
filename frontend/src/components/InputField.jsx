import React from 'react'

export default ({ name, label, onChange, value }) => (
  <div className="input-field ">
    <input type="text" id={name} value={value} onChange={onChange} />
    <label htmlFor={name}>{label}</label>
  </div>
)
