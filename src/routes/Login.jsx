import React, { Component } from 'react'
import OAuthProvider from '../components/OAuthProvider';

export default class Login extends Component {
    render() {
        return (
            <div>
                <OAuthProvider provider="facebook">
                    <button>Facebook</button>
                </OAuthProvider>
            </div>
        )
    }
}