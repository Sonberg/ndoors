import React from 'react'

export default ({ title, value }) => (
    <div style={{ marginBottom: '0.5em' }}>
        <h4 children={value} style={{ textAlign: 'center', marginBottom: '10px', fontWeight: 600, marginTop: '.25em' }} />
        <p children={title} style={{ margin: 0, fontWeight: 500, fontSize: 13 }} />
    </div>
)