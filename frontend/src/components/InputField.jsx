import React from 'react'

export default ({ name, label, onChange, value, type }) => (
  <div className="input-field" style={{ marginBottom: '0px' }}>
    <input type={type || 'text'} id={name} value={value} onChange={onChange} />
    <label class="active" htmlFor={name}>
      {label}
    </label>
  </div>
)
