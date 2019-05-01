import React, { Component } from 'react'
import Badge from '../../../components/Badge';
import * as Api from '../../../api';
import { SkillBadge } from './Overview.Skills'
import Button from '../../../components/Button';

export default class OverviewReference extends Component {

    constructor(props) {
        super(props)

        this.sendReminder = this.sendReminder.bind(this)
        this.remove = this.remove.bind(this);

        this.state = {
            removed: false
        }
    }

    async sendReminder() {
        const data = this.props;
        const referenceUrl = `${Api.url}/approve-reference?key=${data.id}`;
        const message = `Hi ${data.referenceName}, ${data.userName} has asked you to be his/hers reference. Verify here: ${referenceUrl}`;
        const body = JSON.stringify({ message });
        const url = `api/sms/${data.referencePhone}`

        Api.post(url, body);
    }

    async remove() {
        await Api.remove(`api/references/${this.props.id}`);
        this.setState({ removed: true });
    }

    render() {

        if (this.state.removed) {
            return null;
        }

        const { verified, skills, referenceName, referenceEmail, referencePhone, message } = this.props;

        return (
            <div className="row valign-wrapper" style={{ marginLeft: '0' }}>
                <div className="col s12 card">
                    <div className="card-content" style={{ paddingBottom: '0.5em' }}>
                        <div className="row">

                            <div className="col s9">
                                <h5 children={referenceName} />
                                <p children={message} />
                            </div>
                            <div className="col s3" style={{ textAlign: 'right' }}>
                                <div style={{ background: 'rgb(230, 230, 230)', height: 80, width: 80 }} className="circle responsive-img" />
                                <div><small children={referenceEmail} /></div>
                                <div><small children={referencePhone} /></div>
                            </div>
                        </div>
                        <div className="row" style={{ margin: '1em 0 0' }}>
                            {skills && Object.keys(skills).map(s => <SkillBadge key={s} verified={skills[s]} text={s} style={{ paddingLeft: 0 }} />)}
                        </div>
                    </div>
                    <div className="card-action">
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <Button className="btn-small" onClick={this.sendReminder} disabled={verified} style={{ marginRight: '1em' }}>Påminn</Button>
                                <Button className="btn-small" onClick={this.remove} invert disabled={verified}>Ta bort</Button>
                            </div>
                            {verified ? (<Badge children="Verifierad" />) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}