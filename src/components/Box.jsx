import React, { Component } from 'react';

export default class Box extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        const styling = {borderTop: 'none', display: `${(this.props.onBackward || this.props.onContinue) ? 'block' : 'none'}`};
        return (
            <div className="container" style={{marginTop: '100px'}}>
                <div className="row card medium">
                    <div className="col s11 offset-s1">
                        <h4>{this.props.title}</h4>
                    </div>
                    {this.props.content}
                    <div className="row card-action" style={styling}>
                        <a
                            className="col s3 offset-s1 waves-effect waves-light btn backButton"
                            onClick={() => this.props.onBackward()}
                            style={{display: `${(this.props.onBackward) ? 'block' : 'none'}`}}
                        >
                            {this.props.back || "Back"}
                        </a>
                        <a
                            className="col s3 offset-s4 waves-effect waves-light btn center-align frontButton"
                            onClick={() => this.props.onContinue()}
                        >
                            {this.props.next || "Continue"}
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}
