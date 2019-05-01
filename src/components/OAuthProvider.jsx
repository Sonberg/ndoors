import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'
import * as Api from '../api'
import io from 'socket.io-client'
import { actionCreators } from '../store/Auth'

class OAuthProvider extends Component {

    constructor(props) {
        super(props)
        this.state = {
            disabled: false
        }

        this.socket = io(Api.url)
        this.openPopup = this.openPopup.bind(this)
        this.authenticate = this.authenticate.bind(this)
        this.didAuthenticate = this.didAuthenticate.bind(this)
        this.observeAuthenticationProcess = this.observeAuthenticationProcess.bind(this);
    }

    openPopup() {
        const { provider } = this.props
        const width = 600, height = 600
        const left = (window.innerWidth / 2) - (width / 2)
        const top = (window.innerHeight / 2) - (height / 2)
        const url = `${Api.url}/api/auth/${provider}?socketId=${this.socket && this.socket.id}`

        return window.open(url, '',
            `toolbar=no, location=no, directories=no, status=no, menubar=no, 
        scrollbars=no, resizable=no, copyhistory=no, width=${width}, 
        height=${height}, top=${top}, left=${left}`
        )
    }

    authenticate() {
        if (this.state.disabled) {
            return;
        }

        this.popup = this.openPopup()
        this.setState({ disabled: true }, this.observeAuthenticationProcess);
    }

    observeAuthenticationProcess() {
        const interval = setInterval(check, 1000);
        const check = () => {
            if (this.popup || !this.popup.closed || this.popup.closed !== undefined) {
                return;
            }

            clearInterval(interval)
            this.setState({ disabled: false })
        };
    }

    didAuthenticate() {
        this.popup && this.popup.close();
        this.props.init();
    }

    componentDidMount() {
        this.socket.on(this.props.provider, this.didAuthenticate)
    }

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }

        return (
            <div onClick={this.authenticate}>
                {this.props.children}
            </div>
        )
    }
}

export default connect(
    state => state.auth,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(OAuthProvider)