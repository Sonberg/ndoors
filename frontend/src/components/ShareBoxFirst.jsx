import React, { Component } from 'react'
import Input from './InputField'
import { SmallPinkButton } from './../styles/styledComponents'

export default class SharedBoxFirst extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showNewGroup: false,
            newGroupName: '',
            setButtonColor: '#FFF8F7'
        }
    }

    showGroup() {
        this.setState({ showNewGroup: true })
    }

    selectAllButtons() {
        this.setState({ setButtonColor: '#e0cfcc' })
    }

    render() {

        return (
            <div className="container" >
                <div className="row card">
                    <div className="col s11 offset-s1">
                        <h3 style={{ fontSize: '32px' }}>1. Choose group</h3>
                        <p>If you’ve saved a group of references you can choose it below. <br />Or create a new one for future purposes.</p>
                    </div>
                    <div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <SmallPinkButton style={{ backgroundColor: this.state.setButtonColor }} onClick={this.selectAllButtons.bind(this)}>All my references</SmallPinkButton>
                            </div>
                            <div className="col s3">
                                <SmallPinkButton style={{ backgroundColor: this.state.setButtonColor }}>Spring 2019</SmallPinkButton>
                            </div>
                            <div className="col s3" style={{ display: 'inline-flex' }}>
                                <Input
                                    name="newGroupName"
                                    label="Create new group"
                                    value={this.props.details.newGroupName}
                                    onChange={this.props.onChange}
                                />
                                <button onClick={this.showGroup.bind(this)} style={{ borderRadius: '50%', width: '25px', height: '25px', margin: 'auto' }}>+</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <SmallPinkButton style={{ backgroundColor: this.state.setButtonColor }}>E-commerce</SmallPinkButton>
                            </div>
                            <div className="col s3 ">
                                <SmallPinkButton style={{ backgroundColor: this.state.setButtonColor }}>Industry</SmallPinkButton>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s3 offset-s1">
                                <SmallPinkButton style={{ backgroundColor: this.state.setButtonColor }}>Shift Leader</SmallPinkButton>
                            </div>
                            {this.state.showNewGroup && <div className="col s3 ">
                                <SmallPinkButton style={{ backgroundColor: this.state.setButtonColor }}>{this.props.details.newGroupName}</SmallPinkButton>
                            </div>}
                        </div>
                    </div>
                    <div className="row" style={{ padding: '20px 15px' }}>
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
