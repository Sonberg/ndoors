import React, { Component } from 'react';
import queryString from 'query-string';

export default class ApproveReference extends Component {

    constructor(props) {
        super(props);
        const values = queryString.parse(this.props.location.search);
        this.getReferenceData(values.key);
    }

    async getReferenceData(key) {
        console.log("key: ", key)
        fetch(`http://localhost:3001/api/verify-reference/${key}`)
        .then(response => response.json())
        .then(response => {
            if(response.status === "found") {
                console.log(response);
                return;
            }
            console.log(response);
        })
        // call firebase wiith key
        // parse the data
        //display it or somethiing
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello my reference</h1>
            </React.Fragment>
        );
    }
}
