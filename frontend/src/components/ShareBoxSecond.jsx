import React, { Component } from 'react'
import { SmallPinkButton } from './../styles/styledComponents'

export default class SharedBoxSecond extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="container">
                <div className="row card">
                    <div className="col s11 offset-s1">
                        <h3 style={{ fontSize: '32px' }}>2. Choose Reference</h3>
                        <p>
                            Choose the references you want to share with the employer. <br />
                            You can add or remove them as you want.
            </p>
                    </div>
                    <div>
                        <div className="row" style={{ padding: '0 10%' }}>
                            {this.props.details.map((ref, index) => (
                                <div key={index} className="col s4" style={{ padding: '0' }}>
                                    <SmallPinkButton style={{ display: 'inline-flex' }}>
                                        <div
                                            className="col s11"
                                            style={{ padding: '0', paddingTop: '0.5rem' }}
                                        >
                                            {ref.referenceName}
                                        </div>
                                        <div className="col s0">
                                            <a className="btn-floating btn-small waves-effect waves-light">
                                                <i className="material-icons">add</i>
                                            </a>
                                        </div>
                                    </SmallPinkButton>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="row" style={{ padding: '20px 10px' }}>
                        <button
                            className="col s2 offset-s1 waves-effect waves-light btn"
                            style={{ backgroundColor: '#97b2b0' }}
                            onClick={() => this.props.onBackward()}
                        >
                            Back
            </button>
                        <button
                            className="col s2 offset-s6 waves-effect waves-light btn center-align"
                            onClick={() => this.props.onContinue()}
                        >
                            Continue
            </button>
                    </div>
                </div>
            </div>
        )
    }
}
