import React, { Component } from 'react'
import OverviewUser from './components/Overview.User'
import OverviewSkills from './components/Overview.Skills'
import OverviewSuggestions from './components/Overview.Suggestions'
import ReferenceRequest from './components/ReferenceRequest'
import Button from '../../components/Button';
import { get } from '../../api';
import { Link } from 'react-router-dom'

const sectionHeader = {
    fontWeight: '600',
    color: '#333'
}

export default class Overview extends Component {
    state = {
        result: []
    }

    async componentDidMount() {
        try {
            const response = await get(`api/references?userEmail=${localStorage.getItem('email')}`);
            const json = await response.json();

            this.setState({ result: json });
        } catch {

        }
    }

    render() {
        return (
            <div className="container" style={{ width: '80%' }}>
                <div className="row" >
                    <div className="col s12" style={{ marginBottom: '2em' }}>
                        <OverviewUser />
                    </div>
                    <div className="col s7 " style={{ paddingRight: '2em', borderRight: '1px solid rgb(222, 222, 222)', }}>

                        <div style={{ padding: '1em 0', display: 'flex', justifyContent: 'space-between' }}>
                            <Link to="/shared-references" style={{ width: '100%' }} ><Button children="Share references" /></Link>
                            <Button as="a" href="/add-reference" style={{ width: '50%' }}> Add references</Button>
                        </div>


                        <h5 children="Requested references" style={sectionHeader} />
                        {this.state.result.map(x => <ReferenceRequest {...x} />)}

                    </div>
                    <div className="col s5 " style={{ paddingLeft: '1.5em' }}>
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
