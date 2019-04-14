import React from 'react'
import Box from '../../../components/Box';

export default ({ onNext, onBackward, reference }) => (<Box
    title={"Verify your information is correct"}
    content={
        <div>
            <div className="row">
                <div className="col s10 offset-s1 subtitle">
                    This is the information {reference.userName} gave about you.
            </div>
            </div>
            <div className="row">
                <div className="col s4 offset-s1">
                    <label>Name</label>
                    <h6>{reference.referenceName}</h6>
                </div>
                <div className="col s4 offset-s1">
                    <label>Email</label>
                    <h6>{reference.referenceEmail}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col s4 offset-s1">
                    <label>Yrkesroll</label>
                    <h6>{reference.referenceRole}</h6>
                </div>
                <div className="col s4 offset-s1">
                    <label>Phone number</label>
                    <h6>{reference.referencePhone}</h6>
                </div>
            </div>
        </div>
    }
    onBackward={onBackward}
    onContinue={onNext}
    next={"That's correct"}
/>)