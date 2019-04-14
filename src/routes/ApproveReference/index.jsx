import React, { Component } from 'react';
import Box from '../../components/Box';
import { get, patch } from './../../api';
import BoxWelcome from './components/Box.Welcome';
import BoxVerifyInformation from './components/Box.Verify.Information';
import BoxVerifyRelation from './components/Box.Verify.Relation';
import BoxVerifySkills from './components/Box.Verify.Skills';
import BoxVerifyYourself from './components/Box.Verify.Yourself';
import BoxPersonalNote from './components/Box.Personal.Note';
import BoxThankYou from './components/Box.Thank.You';

export default class ApproveReference extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.match.params.id
        };

        this.onNext = this.onNext.bind(this)
        this.onBackward = this.onBackward.bind(this)
    }

    componentDidMount() {
        this.getReferenceData(this.state.id).then(result => {
            this.setState(result || {});
            result ?
                this.setState({ pageStep: (result.verified) ? 6 : 0 }) :
                this.setState({ pageStep: 55 });
        });
    }

    async getReferenceData(key) {
        const response = await get(`api/references/${key}`);
        if (response.status === 404) {
            return null;
        }

        return response.json();
    }

    onBackward() {
        this.setState({ pageStep: this.state.pageStep - 1 })
    }

    onNext() {
        this.setState({ pageStep: this.state.pageStep + 1 });
    }

    render() {
        let page;
        switch (this.state.pageStep) {
            case 0: {
                page = <BoxWelcome onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 1: { // Verify your information
                page = <BoxVerifyInformation onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 2: { // Verify your relation
                page = <BoxVerifyRelation onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 3: { // verify skills
                page = <BoxVerifySkills onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 4: { // Add personal note
                page = <BoxPersonalNote onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 5: { // veriify you are you
                page = <BoxVerifyYourself onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 6: { // nice referencing
                page = <BoxThankYou onNext={this.onNext} onBackward={this.onBackward} reference={this.state} />
                break;
            }
            case 55: {
                page = <h1>Invalid reference</h1>
                break;
            }
            default: {
                page = (<div></div>)
            }
        }
        return (
            <React.Fragment>
                <div className="approveForm" style={{
                    height: '100vh',
                    backgroundColor: '#fff8f7',
                    position: 'absolute',
                    width: '100%',
                    backgroundImage: `url('assets/images/BGK_invert.svg')`
                }}
                >{page}</div>
                <button onClick={() => {
                    this.updateVerifyField(false);
                }}>Reset</button>
            </React.Fragment>
        );
    }
}
