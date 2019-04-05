import React, { Component } from 'react'
import EmpowerAF from './../../../components/EmpowerAF'

const sectionHeader = {
    fontWeight: '600',
    color: '#333'
}

export default class OverviewSkills extends Component {
    render() {
        return (
            <div style={{ marginTop: '1em' }}>
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1em'
                }}>
                    <h5 children="Skills/abilities" style={sectionHeader} />
                    <EmpowerAF />
                </div>
                <div className="row">
                    <SkillBadge text="Python" number="5" />
                    <SkillBadge text="Python" number="5" />
                    <SkillBadge text="Python" number="5" />
                    <SkillBadge text="Python" number="5" />
                    <SkillBadge text="Python" number="5" />
                </div>
            </div>
        );
    }
}

const badgeStyle = {
    padding: '.25em 1em',
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em',
    fontWeight: '600',
    borderRadius: 100,
    background: '#fd9f96',
    fontSize: 13,
    color: 'white',
    justifyContent: 'space-between'
}

export const SkillBadge = ({ text, number, style }) => (
    <div className="col" style={style}>
        <div style={badgeStyle}>
            <div children={text} style={{ marginRight: '1em' }} />
            <div>
                {number ? number : (<i className="tiny material-icons" style={{ marginTop: 4 }}>check</i>)}
            </div>
        </div>
    </div>
)