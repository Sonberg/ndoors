import React, { Component } from 'react'
import Input from './InputField'

export default class SharedBoxThird extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="row card">
                    <div className="col s11 offset-s1">
                        <h3 style={{ fontSize: '32px' }}>Preview?</h3>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <button>Group</button>
                            </div>
                            <div className="col s3 ">
                                <button>Group</button>
                            </div>
                            <div className="col s3 ">
                                <button>Group</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <button>Group</button>
                            </div>
                            <div className="col s3 ">
                                <button>Group</button>
                            </div>
                            <div className="col s3 ">
                                <button>Group</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <button>Group</button>
                            </div>
                            <div className="col s3 ">
                                <button>Group</button>
                            </div>
                            <div className="col s3 ">
                                <button>Group</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s5 offset-s1 ">
                            <Input
                                name="referentName"
                                label="Create Group"
                                value={this.props.details.referentName}
                                onChange={this.props.onChange}
                            />
                        </div>
                        <div className="col s2 offset-s1 ">
                            <button style={{ borderRadius: '50%', width: '30px', height: '30px', marginTop: '25%' }}>+</button>
                        </div>
                    </div>
                    <div className="row">
                        <button
                            className="col s2 offset-s1 waves-effect waves-light btn"
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
