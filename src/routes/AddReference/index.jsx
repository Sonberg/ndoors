import React, { Component } from 'react'
import BoxFirst from './components/BoxFirst'
import BoxSecond from './components/BoxSecond'
import BoxThird from './components/BoxThird'
import BoxFourth from './components/BoxFourth'
import BoxFifth from './components/BoxFifth'
import BoxSixth from './components/BoxSixth'
import BoxSeventh from './components/BoxSeventh'
import { post, url } from '../../api'

export default class AddReferences extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.saveToArray = this.saveToArray.bind(this)
        this.saveReference = this.saveReference.bind(this)
        this.sendSms = this.sendSms.bind(this)
        this.state = {
            referenceState: 1,
            referenceDetails: {
                referentName: '',
                referentRole: '',
                referentPhoneNumber: '',
                referentEmail: '',
                skills: [],
                abilities: [],
                role: '',
                responsibility: '',
                workplace: '',
                dateFrom: '',
                dateTo: '',
                note: '',
                name: localStorage.getItem('user') || '',
                email: localStorage.getItem('email') || '',
                currentRole: '',
                password: '',
                passwordConfirm: ''
            }
        }
    }
    onContinue() {
        this.setState({ referenceState: this.state.referenceState + 1 })
    }
    onBackward() {
        this.setState({ referenceState: this.state.referenceState - 1 })
    }
    onChange({ target }) {
        this.setState({
            referenceDetails: {
                ...this.state.referenceDetails,
                [target.id]: target.value
            }
        })
    }

    saveToArray({ target }) {
        this.setState({
            referenceDetails: {
                ...this.state.referenceDetails,
                [target.id]: [
                    ...(this.state.referenceDetails[target.id] || []),
                    target.value
                ]
            }
        })
    }
    getObjectArray(array) {
        return array.reduce((current, next) => {
            return { ...current, [next]: false }
        }, {})
    }

    loggedIn() {
        if (localStorage.getItem('loggedIn')) {
            const body = this.getBody()
            this.saveReference(body)
            this.props.history.push('/')
        } else this.onContinue()
    }

    getBody() {
        const details = this.state.referenceDetails
        return {
            message: details.note,
            place: details.workplace,
            referenceEmail: details.referentEmail,
            referenceName: details.referentName,
            referencePhone: details.referentPhoneNumber,
            referenceRole: details.referentRole,
            relationEnd: details.dateTo,
            relationStart: details.dateFrom,
            userResponsibility: details.responsibility,
            userEmail: details.email,
            userName: details.name,
            userRole: details.role,
            verified: false,
            skills: this.getObjectArray(details.skills),
            abilities: this.getObjectArray(details.abilities)
        }
    }
    toDatabase() {
        const body = this.getBody()
        this.saveReference(body)
        this.onContinue()
    }

    async saveReference(body) {
        const response = await post('api/references', JSON.stringify(body))
        const json = await response.json()

        this.sendSms(json)
    }

    sendSms(data) {
        const referenceUrl = `${url}/approve-reference/${data.id}`;
        const message = `Hi ${data.referenceName}, ${data.userName} has asked you to be his/hers reference. Verify here: ${referenceUrl}`;
        const body = JSON.stringify({ message });
        const url = `api/sms/${data.referencePhone}`
        post(url, body);
    }

    render() {
        let referencePage
        switch (this.state.referenceState) {
            case 1:
                referencePage = (
                    <div>
                        <BoxFirst
                            onBackward={() => this.onBackward()}
                            onContinue={() => this.onContinue()}
                            onChange={this.onChange}
                            details={this.state.referenceDetails}
                        />
                    </div>
                )
                break
            case 2:
                referencePage = (
                    <BoxSecond
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onContinue()}
                        onChange={this.onChange}
                        details={this.state.referenceDetails}
                    />
                )
                break
            case 3:
                referencePage = (
                    <BoxThird
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onContinue()}
                        onSelect={this.saveToArray}
                        details={this.state.referenceDetails}
                    />
                )
                break
            case 4:
                referencePage = (
                    <BoxFourth
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.loggedIn()}
                        onChange={this.onChange}
                        details={this.state.referenceDetails}
                    />
                )
                break
            case 5:
                referencePage = (
                    <BoxFifth
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.toDatabase()}
                        onChange={this.onChange}
                        details={this.state.referenceDetails}
                    />
                )
                break
            case 6:
                referencePage = (
                    <BoxSixth
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onContinue()}
                        onChange={this.onChange}
                        details={this.state.referenceDetails}
                    />
                )
                break
            case 7:
                referencePage = (
                    <BoxSeventh
                        onContinue={() => this.onContinue()}
                        onChange={this.onChange}
                        details={this.state.referenceDetails}
                    />
                )
                break
            default:
                referencePage = (
                    <div>
                        <BoxFirst
                            onBackward={() => this.onBackward()}
                            onContinue={() => this.onContinue()}
                            onChange={this.onChange}
                            details={this.state.referenceDetails}
                        />
                    </div>
                )
        }

        return (
            <div
                style={{
                    marginTop: '100px',
                    height: '100vh',
                    backgroundImage: `url(${'ssets/images/BGK.svg'})`
                }}
            >
                {referencePage}
            </div>
        )
    }
}