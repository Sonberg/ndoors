import React from 'react'
import { patch } from "../../../api";
import Box from '../../../components/Box';

export default class BoxPersonalNote extends React.Component {

    constructor(props) {
        super(props)

        this.updateNote = this.updateNote.bind(this)
        this.saveNote = this.saveNote.bind(this)
        this.state = {
            value: props.reference.note || ''
        }
    }
    updateNote({ target }) {
        this.setState({
            value: target.value
        })
    }

    saveNote() {
        patch(`api/references/${this.state.id}`, { note: this.state.value });
        this.props.onNext()
    }

    render() {
        const { reference, onBackward, } = this.props;

        return (
            <Box
                title={`Add a personal note about ${reference.userName}`}
                content={
                    <div>
                        <div className="row">
                            <div className="col s10 offset-s1 subtitle">
                                This will be shown to the potential employer.
                                    </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s10 offset-s1">
                                <textarea id="textarea1" className="materialize-textarea" value={this.state.value} onChange={this.updateNote}></textarea>
                                <label htmlFor="textarea1">Personal note</label>
                            </div>
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