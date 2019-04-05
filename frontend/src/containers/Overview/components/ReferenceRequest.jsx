import React, { Component } from 'react'
import Badge from '../../../components/Badge';
import { post } from '../../../api';
import { SkillBadge } from './Overview.Skills'
import Button from '../../../components/Button';

export default class ReferenceRequest extends Component {

    constructor(props) {
        super(props)

        this.sendReminder = this.sendReminder.bind(this)
    }

    async sendReminder() {
        const number = '0701653411';
        const message = 'Hej, bli en referent nu';

        await post(`api/sms/${number}/${message}`);
    }

    render() {

        const { verified, skills } = this.props;

        return (
            <div className="row valign-wrapper" style={{ marginLeft: '0' }}>
                <div className="col s12 card">
                    <div className="card-content" style={{ paddingBottom: '0.5em' }}>
                        <div className="row">

                            <div className="col s10">
                                <h5 children="Namn Namnsson" />
                                <p children="Hej, kan du vara referens åt mig?" />
                            </div>
                            <div className="col s2">
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80" alt="" className="circle responsive-img" />
                            </div>
                        </div>
                        <div className="row" style={{ margin: '1em 0 0' }}>
                            {skills.map(s => <SkillBadge key={s} text={s} style={{ paddingLeft: 0 }} />)}
                        </div>
                    </div>
                    <div className="card-action">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Button className="btn-small" onClick={this.sendReminder} disabled={verified}>Påminn</Button>
                            {verified ? (<Badge children="Verifierad" />) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}