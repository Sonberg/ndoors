import React, { Component } from 'react'

import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators';

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
        return (<div>
            <input value={this.state.value} onChange={this.onChange} />
            <div>
                {this.state.result.map(this.renderHit)}
            </div>
        </div>);
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