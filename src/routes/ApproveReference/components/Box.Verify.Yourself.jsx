import React from 'react'
import Box from '../../../components/Box';
import { patch } from '../../../api';

export default class BoxVerifyYourself extends React.Component {

    constructor(props) {
        super(props)
        this.onNext = this.onNext.bind(this)
    }


    onNext() {
        patch(`api/references/${this.state.id}`, { verified: true });
        this.props.onNext()
    }

    render() {

        const { reference, onBackward } = this.props;

        return (
            <Box
                title={"Verify you're you"}
                content={
                    <div>
                        <div className="row">
                            <div className="col s10 offset-s1 subtitle">
                                To guarantee employers that you're who you say you are and help {reference.userName} increase their chance of getting employed.
                                    </div>
                        </div>
                        <div className="row">
                            <label className="col s10 offset-s1">Verify by</label>
                        </div>
                        <div className="row">
                            <img className="col s2 offset-s1" src="assets/images/bankid.png" style={{ width: 100 }} />
                            <img className="col s2 circle" src="assets/images/linkedin.png" style={{ width: 100 }} />
                            <img className="col s2" src="assets/images/github.png" style={{ width: 100 }} />
                        </div>
                    </div>
                }
                onBackward={onBackward}
                next={"Submit"}
                onContinue={this.onNext}
            />
        );
    }
}