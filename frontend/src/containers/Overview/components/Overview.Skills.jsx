import React, { Component } from 'react'
const sectionHeader = {
    fontWeight: '500',
    color: '#333'
}

export default class OverviewSkills extends Component {
    render() {
        return (
            <div style={{ marginTop: '1em' }}>
                <h5 children="Skills/abilities" style={sectionHeader} />
            </div>
        );
    }
}
