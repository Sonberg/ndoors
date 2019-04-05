import React from 'react'

export default ({ name, label, onChange, value, type }) => (
  <div className="input-field" style={{ marginBottom: '0px' }}>
    <input type={type || 'text'} id={name} value={value} onChange={onChange} />
    <label htmlFor={name}>{label}</label>
  </div>
)
