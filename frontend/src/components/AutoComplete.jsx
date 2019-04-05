import React, { Component } from 'react'

import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators';

import styled from "styled-components"

const Container = styled.div`
width: 10rem;
position: relative;
`;

const ResultContainer = styled.div`
position: absolut;
top: 0;
left: 0,
right: 0;
`;

export default class AutoComplete extends Component {

    constructor(props) {
        super(props)

        this.search = this.search.bind(this);
        this.renderHit = this.renderHit.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            value: '',
            result: []
        }
        this.onSearch$ = new Subject();
    }

    render() {
        return (<Container>
            <div class="row">
                <div class="input-field col s6">
                    <input value={this.state.value} onChange={this.onChange} id="auto-complete" type="text" />
                    <label className="active" for="auto-complete" children={this.props.label} />
                </div>
            </div>
            <ResultContainer>
                {this.state.result.map(this.renderHit)}
            </ResultContainer>
        </Container >);
    }

    renderHit(hit) {
        return <div key={hit} children={hit} onClick={() => this.onClick(hit)} />
    }

    componentDidMount() {
        this.subscription = this.onSearch$
            .pipe(
                debounceTime(200))
            .subscribe(this.search);
    }

    componentWillUnmount() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    onClick(hit) {
        this.setState({ value: hit, result: [] })
    }

    onChange = ({ target }) => this.setState({ value: target.value }, () => this.onSearch$.next(target.value));

    async search(query) {
        const response = await fetch(`http://localhost:3001/${this.props.url}?q=${query}`)
        if (response.status !== 200) {
            return;
        }

        this.setState({ result: await response.json() });
    }

}