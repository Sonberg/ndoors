import React, { Component } from 'react'
import * as M from 'materialize-css'

import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

import { get } from './../api';

export default class AutoComplete extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
    this.search = this.search.bind(this)
    this.renderHit = this.renderHit.bind(this)
    this.onClick = this.onClick.bind(this)

    this.state = {
      value: props.value || '',
      result: []
    }
    this.onSearch$ = new Subject()
  }

  render() {
    return (
      <div className="input-field">
        <input
          autoComplete="off"
          type="text"
          value={this.state.value}
          onChange={this.onChange}
          id={this.props.name}
        />
        <label htmlFor={this.props.label}>{this.props.label}</label>
        <div>{this.state.result.map(this.renderHit)}</div>
      </div>
    )
  }

  renderHit(hit) {
    return <div key={hit} children={hit} onClick={() => this.onClick(hit)} />
  }

  componentDidMount() {
    M.updateTextFields()
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
    let event1 = { target: { value: hit, id: this.props.name } }
    if (this.props.onSelect) {
      this.setState({ value: '', result: [] })
      this.props.onSelect(event1)
    } else {
      this.props.onChange && this.props.onChange(event1)
      this.setState({ value: hit, result: [] })
    }
  }

  onChange = ({ target }) => {
    this.setState({ value: target.value }, () =>
      this.onSearch$.next(target.value)
    )
    this.props.onChange && this.props.onChange({ target })
  }

  async search(query) {
    const response = await get(`${this.props.url}?q=${query}`
    )
    if (response.status !== 200) {
      return
    }

    this.setState({ result: await response.json() })
  }
}
