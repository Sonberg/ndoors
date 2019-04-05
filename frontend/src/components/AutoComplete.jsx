import React, { Component } from 'react'

import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

import styled from 'styled-components'

const Container = styled.div`
  width: 10rem;
  position: relative;
`

const ResultContainer = styled.div`
position: absolut;
top: 0;
left: 0,
right: 0;
`

export default class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
    this.renderHit = this.renderHit.bind(this)
    this.onClick = this.onClick.bind(this)

    this.state = {
      value: props.value,
      result: []
    }
    this.onSearch$ = new Subject()
  }

  render() {
    return (
      <div className="input-field">
        <input
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          id={this.props.label}
        />
        <label
          style={{ textTransform: 'capitalize' }}
          htmlFor={this.props.label}
        >
          {this.props.label}
        </label>
        <div>{this.state.result.map(this.renderHit)}</div>
      </div>
    )
  }

  renderHit(hit) {
    return <div key={hit} children={hit} onClick={() => this.onClick(hit)} />
  }

  componentDidMount() {
    this.subscription = this.onSearch$
      .pipe(debounceTime(200))
      .subscribe(this.search)
  }

  componentWillUnmount() {
    if (this.subscription) {
      this.subscription.unsubscribe()
    }
  }

  onClick(hit) {
    this.setState({ value: hit, result: [] })
    this.props.onChange({ target: { value: hit, id: this.props.label } })
  }

  onChange = ({ target }) => {
    this.setState({ value: target.value }, () =>
      this.onSearch$.next(target.value)
    )
    this.props.onChange({ target })
  }

  async search(query) {
    const response = await fetch(
      `http://localhost:3001/${this.props.url}?q=${query}`
    )
    if (response.status !== 200) {
      return
    }

    this.setState({ result: await response.json() })
  }
}
