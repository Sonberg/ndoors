import React, { Component } from 'react'
import OverviewUser from './components/Overview.User'
import ReferenceRequest from '../../components/ReferenceRequest'

export default class Overview extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <OverviewUser />
                    </div>
                    <div className="col s8">

                        <div style={{ padding: '2em 0', display: 'flex', justifyContent: 'start' }}>
                            <button className="waves-effect waves-light btn-large" style={{ marginRight: '1em' }}>Share references</button>
                            <a href="/add-reference" className="waves-effect waves-light btn-large">Add references</a>
                        </div>


                        <h4 children="Requested references" style={{ fontWeight: '500', marginTop: 0, color: '#888' }} />
                        <ReferenceRequest />
                        <ReferenceRequest verified />
                        <ReferenceRequest verified />
                        <ReferenceRequest verified />


                    </div>
                    <div className="col s4">
                    </div>
                </div>
            </div>
        );
    }
}