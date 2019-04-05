import React, { Component } from 'react';
import queryString from 'query-string';

export default class ApproveReference extends Component {
    constructor(props) {
        super(props);
        const values = queryString.parse(this.props.location.search);
        this.state = {
            id: values.key
        };
        this.getReferenceData(values.key).then(result => {
            this.setState(result);
            this.setState({pageStep: (this.state.verified) ? 4 : 1});
            console.log("hello: ", this.state)
        });
    }

    async getReferenceData(key) {
        return fetch(`http://localhost:3001/api/verify-reference/${key}`)
            .then(response => response.json())
            .then(response => {
                return response;
            })
    }

    onNext() {
        this.setState({ pageStep: this.state.pageStep + 1 });
    }

    async updateVerifyField(verify) {
        return fetch(`http://localhost:3001/api/verify-reference/${this.state.id}/verified/${verify}`, {
            method: 'POST'
        }).then(response => {
            console.log("meep: ", response);
            this.setState({verified: verify})
        })
    }

    async updateField(fieldKey, fieldValue) {
        return fetch(`http://localhost:3001/api/verify-reference/${this.state.id}`, {
            method: 'POST'
        })
    }

    render() {
        let page;
        switch (this.state.pageStep) {
            case 1: { // Verify that this is you
                page = (
                    <div>
                        <h1>Verify yourself</h1>
                        <button onClick={() => this.onNext()}>Next</button>
                    </div>
                )
                break;
            }
            case 2: { // Verify your relation
                page = (
                    <div>
                        <h1>verify relation</h1>
                        <button onClick={() => this.onNext()}>Next</button>
                    </div>
                )
                break;
            }
            case 3: { // verify skills
                page = (
                    <div>
                        <h1>verify skills</h1>
                        <button onClick={() => {
                            this.onNext();
                            this.updateVerifyField(true);
                        }}>Next</button>
                    </div>
                )
                break;
            }
            case 4: {
                page = (
                    <h1>Already verified</h1>
                )
                break;
            }
            default: {
                page = <h1>Loading...</h1>
            }
        }
        return (
            <React.Fragment>
                <h1>Hello my reference</h1>
                <div>{page}</div>
            </React.Fragment>
        );
    }
}
