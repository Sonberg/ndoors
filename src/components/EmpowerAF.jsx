import React from 'react'

const style = {
    fontWeight: 'bolder',
    fontSize: 11,
    margin: '.25em 0',
    textAlign: 'right'
}

export default () => (
    <div style={{ marginRight: '1em' }}>
        <p style={style}>Empowered by</p>
        <img src="assets/images/logo_AF.png" style={{ width: 140 }} />
    </div>
)