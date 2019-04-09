import React, { Component } from 'react'
import Input from '../../../components/InputField'
import { BigButton } from '../../../styles/styledComponents'
import Button from '../../../components/Button'
import { withRouter } from 'react-router'

class SharedBoxThird extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div className="container">
                <div className="row card">
                    <div className="col s11 offset-s1">
                        <h3 style={{ fontSize: '32px' }}>3. Preview and share</h3>
                        <p>Be sure to preview your references before you ship them off!</p>
                    </div>

                    <div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <BigButton>OPEN PREVIEW</BigButton>
                            </div>
                            <div className="col s3 ">
                                <BigButton>DOWNLOAD PDF</BigButton>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12 offset-s1" style={{ display: 'inline-flex' }}>
                                <p style={{ fontWeight: 'bold', fontSize: '1rem' }}>SEND THROUGH</p>
                                <img style={{ margin: '0 1rem', width: '2%' }} src='assets/images/icon-link.svg' />
                                <img style={{ width: '2%' }} src='assets/images/icon-mail.svg' />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s5 offset-s1 ">
                                <Input
                                    name="referentName"
                                    label="https://ndoors.com/user/spring2019"
                                    value={this.props.details.referentName}
                                    onChange={this.props.onChange}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ padding: '20px 10px' }}>
                        <Button
                            className="col s2 offset-s1 waves-effect waves-light btn"
                            style={{ backgroundColor: "#97b2b0" }}
                            onClick={() => this.props.onBackward()}
                        >
                            Back
                        </Button>
                        <Button
                            className="col s2 offset-s6 waves-effect waves-light btn center-align"
                            onClick={() => { this.props.history.push('/') }}
                        >
                            Continue
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(SharedBoxThird)
