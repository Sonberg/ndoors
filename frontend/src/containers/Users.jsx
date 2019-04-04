import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
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
                <Container className="pt-3">Users!</Container>
            </React.Fragment>
        )
    }
}
