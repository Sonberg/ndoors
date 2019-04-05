import React, { Component } from 'react'
import OverviewUser from './components/Overview.User'
import OverviewSkills from './components/Overview.Skills'
import OverviewSuggestions from './components/Overview.Suggestions'
import ReferenceRequest from './components/ReferenceRequest'
import Button from '../../components/Button';

const sectionHeader = {
    fontWeight: '600',
    color: '#333'
}

export default class Overview extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12" style={{ marginBottom: '2em' }}>
                        <OverviewUser />
                    </div>
                    <div className="col s12 m6">

                        <div style={{ padding: '1em 0', display: 'flex', justifyContent: 'start' }}>
                            <Button children="Share references" style={{ marginRight: '1em' }} />
                            <Button as="a" href="/add-reference">Add references</Button>
                        </div>


                        <h5 children="Requested references" style={sectionHeader} />
                        <ReferenceRequest skills={["Blockchain"]} />
                        <ReferenceRequest verified skills={["React", "AWS", "Machine learning"]} />
                        <ReferenceRequest verified skills={["jQuery"]} />
                        <ReferenceRequest verified skills={["Linux", "Git", "React"]} />


                    </div>
                    <div className="col s12 m6" style={{ paddingLeft: '1.5em' }}>
                        <OverviewSkills />
                        <div style={{ marginLeft: '0.75em' }}>
                            <OverviewSuggestions />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
