import React, { Component } from 'react'
import Navigation from '../components/Navigation'

export default class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <React.Fragment>
                <Navigation />
                <div className="pt-3">Users!</div>
            </React.Fragment>
        )
    }
}
