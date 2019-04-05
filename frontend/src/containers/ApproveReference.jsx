import React, { Component } from 'react';
import queryString from 'query-string';
import Box from '../components/Box';

export default class ApproveReference extends Component {
    constructor(props) {
        super(props);
        const values = queryString.parse(this.props.location.search);
        this.state = {
            id: values.key
        };
        this.toggleSkill = this.toggleSkill.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.pushSkillsAndAbilities = this.pushSkillsAndAbilities.bind(this);
        this.pushNote = this.pushNote.bind(this);
        this.getReferenceData(values.key).then(result => {
            this.setState(result);
            (this.state.status === "Found") ?
                this.setState({ pageStep: (this.state.verified) ? 5 : 3 }) :
                this.setState({ pageStep: 55 });
        });
    }

    async getReferenceData(key) {
        return fetch(`http://localhost:3001/api/verify-reference/${key}`)
            .then(response => response.json())
            .then(response => {
                return response;
            })
    }

    onBackward() {
        this.setState({ pageStep: this.state.pageStep - 1 })
    }

    onNext() {
        this.setState({ pageStep: this.state.pageStep + 1 });
    }

    async updateVerifyField(verify) {
        return fetch(`http://localhost:3001/api/verify-reference/${this.state.id}/verified/${verify}`, {
            method: 'POST'
        }).then(response => {
            this.setState({ verified: verify })
        })
    }

    boxie(id, thingy, skillOrAbility, classes) {
        const classStuff=`checkie ${classes}`;
        return (
            <p className={classStuff} key={id}>
                <label>
                    <input type="checkbox" defaultChecked={this.state[skillOrAbility][thingy]} onChange={this.toggleSkill} value={thingy} id={skillOrAbility} />
                    <span>{thingy}</span>
                </label>
            </p>
        )
    }

    toggleSkill({target}) {
        let state = this.state[target.id][target.value];
        this.setState({
            [target.id]: {
                ...this.state[target.id],
                [target.value]: !state
            }
        })
    }

    updateNote({target}) {
        this.setState({
            textAreaValue: target.value
        })
    }

    pushSkillsAndAbilities() {
        fetch(`http://localhost:3001/api/verify-reference/${this.state.id}/skills`, {
            method: 'POST',
            body: JSON.stringify(this.state.skills),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        fetch(`http://localhost:3001/api/verify-reference/${this.state.id}/abilities`, {
            method: 'POST',
            body: JSON.stringify(this.state.abilities),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    pushNote() {
        fetch(`http://localhost:3001/api/verify-reference/${this.state.id}/note`, {
            method: 'POST',
            body: JSON.stringify({'note': this.state.textAreaValue}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }

    render() {
        let page;
        switch (this.state.pageStep) {
            case 0: {
                const title = `${this.state.userName} added you as a reference`;
                page = (
                    <Box
                        title={title}
                        content={
                            <div className="row">
                                <div className="col s3 offset-s1">
                                    <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=60" alt="" className="circle responsive-img" />
                                </div>
                                <div className="col s7">
                                    <h5>Dear {this.state.referenceName},</h5>
                                    <p>{this.state.message}</p>
                                </div>
                            </div>
                        }
                        onBackward={() => { }}
                        onContinue={() => this.onNext()}
                    />
                )
                break;
            }
            case 1: { // Verify your information
                page = (
                    <Box
                        title={"Verify your information is correct"}
                        content={
                            <div>
                                <div className="row">
                                    <div className="col s10 offset-s1 subtitle">
                                        This is the information {this.state.userName} gave about you.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s4 offset-s1">
                                        <label>Name</label>
                                        <h6>{this.state.referenceName}</h6>
                                    </div>
                                    <div className="col s4 offset-s1">
                                        <label>Email</label>
                                        <h6>{this.state.referenceEmail}</h6>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s4 offset-s1">
                                        <label>Yrkesroll</label>
                                        <h6>{this.state.referenceRole}</h6>
                                    </div>
                                    <div className="col s4 offset-s1">
                                        <label>Phone number</label>
                                        <h6>{this.state.referencePhone}</h6>
                                    </div>
                                </div>
                            </div>
                        }
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onNext()}
                        next={"That's correct"}
                    />
                )
                break;
            }
            case 2: { // Verify your relation
                page = (
                    <Box
                        title={"Verify your relation"}
                        content={
                            <div>
                                <div className="row">
                                    <div className="col s10 offset-s1 subtitle">
                                        This is the information {this.state.userName} gave about themselves while you worked together.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col s3 offset-s1">
                                        <div className="row">
                                            <label>You worked together at</label>
                                            <h6>{this.state.place}</h6>
                                        </div>
                                        <div className="row">
                                            <label>Their role was</label>
                                            <h6>{this.state.userRole}</h6>
                                        </div>
                                    </div>
                                    <div className="col s3">
                                        <label>between the period</label>
                                        <h6>{this.state.relationStart} - </h6>
                                        <h6>{this.state.relationEnd}</h6>
                                    </div>
                                    <div className="col s4">
                                        <label>Their main role was</label>
                                        <p>{this.state.userResponsibility}</p>
                                    </div>
                                </div>
                            </div>
                        }
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onNext()}
                        next={"That's correct"}
                    />
                )
                break;
            }
            case 3: { // verify skills
                let skillboxes = [];
                let abilityboxes = [];
                let idx = 0;
                for (const skill in this.state.skills) {
                    skillboxes.push(this.boxie(idx, skill, "skills", "col s5"));
                    idx++;
                }
                for (const ability in this.state.abilities) {
                    abilityboxes.push(this.boxie(idx, ability, "abilities", "col s12"));
                    idx++;
                }

                page = (
                    <Box
                        title={"Can you verify these skills and abilities?"}
                        content={
                            <div>
                                <div className="row">
                                    <div className="col s10 offset-s1 subtitle">
                                        Choose the ones you'd like to endorse.
                                    </div>
                                </div>
                                <div className="row">
                                    <form>
                                        <div className="col s6 offset-s1">
                                            <label>Skills</label>
                                            <div className="checkiContainer">
                                                {skillboxes}
                                            </div>
                                        </div>
                                        <div className="col s3">
                                            <label>Abilities</label>
                                            <div>
                                                {abilityboxes}
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        }
                        onBackward={() => this.onBackward()}
                        onContinue={() => {
                            this.pushSkillsAndAbilities();
                            this.onNext();
                        }}
                    />
                )
                break;
            }
            case 4: { // Add personal note
                const title = `Add a personal note about ${this.state.userName}`;
                page = (
                    <Box
                        title={title}
                        content={
                            <div>
                                <div className="row">
                                    <div className="col s10 offset-s1 subtitle">
                                        This will be shown to the potential employer.
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s10 offset-s1">
                                        <textarea id="textarea1" className="materialize-textarea" value={this.state.textAreaValue} onChange={this.updateNote}></textarea>
                                        <label htmlFor="textarea1">Personal note</label>
                                    </div>
                                </div>
                            </div>
                        }
                        onBackward={() => this.onBackward()}
                        next={"Submit"}
                        onContinue={() => {
                            this.pushNote(this.state.note)
                            this.onNext()
                        }}
                    />
                )
                break;
            }
            case 5: { // veriify you are you
                page = (
                    <Box
                        title={"Verify you're you"}
                        content={
                            <div>
                                <div className="row">
                                    <div className="col s10 offset-s1 subtitle">
                                        To guarantee employers that you're who you say you are and help {this.state.userName} increase their chance of getting employed.
                                    </div>
                                </div>
                            </div>
                        }
                        onBackward={() => this.onBackward()}
                        next={"Submit"}
                        onContinue={() => {
                            this.updateVerifyField(true);
                            this.onNext()
                        }}
                    />
                )
                break;
            }
            case 6: { // nice referencing
                page = (
                    <Box
                        title={"Nice referencing!"}
                        content={
                            <div>
                                <div className="row">
                                    <div className="col s10 offset-s1 subtitle">
                                        You've helped {this.state.userName} on their way to land a new job.
                                    </div>
                                </div>
                            </div>
                        }
                        onBackward={() => this.onBackward()}
                        onContinue={() => this.onNext()}
                    />
                )
                break;
            }
            case 55: {
                page = <h1>Invalid reference</h1>
                break;
            }
            default: {
                page = <h1>Loading...</h1>
            }
        }
        return (
            <React.Fragment>
                <div className="approveForm">{page}</div>
                <button onClick={() => {
                    this.updateVerifyField(false);
                }}>Reset</button>
            </React.Fragment>
        );
    }
}
