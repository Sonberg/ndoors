import React, { Component } from 'react'
import OverviewUser from './components/Overview.User'
import OverviewSkills from './components/Overview.Skills'
import ReferenceRequest from '../../components/ReferenceRequest'
import Button from '../../components/Button';

const sectionHeader = {
    fontWeight: '500',
    color: '#333'
}

export default class Overview extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <OverviewUser />
                    </div>
                    <div className="col s12 m6">

                        <h5 children="Profile completion" style={sectionHeader} />
                        <div style={{ padding: '1em 0', display: 'flex', justifyContent: 'start' }}>
                            <Button children="Share references" style={{ marginRight: '1em' }} />
                            <Button as="a" href="/add-reference">Add references</Button>
                        </div>


                        <h5 children="Requested references" style={sectionHeader} />
                        <ReferenceRequest />
                        <ReferenceRequest verified />
                        <ReferenceRequest verified />
                        <ReferenceRequest verified />


                    </div>
                    <div className="col s12 m6">
                        <OverviewSkills />
                    </div>
                </div>
            </div>
        );
    }
}