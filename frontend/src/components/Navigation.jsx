import React, { Component } from 'react'

export default class Navigation extends Component {
    render() {

        return (
            <nav style={{ backgroundColor: '#6C9F9B' }}>
                <div className="nav-wrapper mx-4">
                    <a href="#" className="brand-logo">nDoors</a>
                    <ul className="right hide-on-med-and-down">
                        <li>Log in</li>
                    </ul>
                </div>
            </nav>
        )
    }
}
