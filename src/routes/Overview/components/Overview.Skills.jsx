import React, { Component } from 'react'
import EmpowerAF from './../../../components/EmpowerAF'
import { get } from '../../../api';

const sectionHeader = {
    fontWeight: '600',
    color: '#333'
}

export default class OverviewSkills extends Component {

    state = {
        user: null
    }

    render() {

        if (!this.state.user) {
            return null;
        }

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
                    <SkillBadge text="Tryckförare" number="5" />
                    <SkillBadge text="Ledarskap" number="1" />
                    <SkillBadge text="Motviktstruck" number="2" />
                    <SkillBadge text="Organiserad" number="1" />
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
    background: '#ffebe8',
    fontSize: 13,
    color: '#333333',
    justifyContent: 'space-between'
}

export const SkillBadge = ({ text, number, style, verified = true }) => (
    <div className="col" style={{ ...style, opacity: verified ? 1 : 0.4 }}>
        <div style={badgeStyle}>
            <div children={text} style={{ marginRight: '1em' }} />
            <div>
                {number ? number : (<i className="tiny material-icons" style={{ marginTop: 4 }}>check</i>)}
            </div>
        </div>
    </div >
)