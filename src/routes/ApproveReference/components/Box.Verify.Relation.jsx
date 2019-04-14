import React from 'react'
import Box from '../../../components/Box';

export default ({ onNext, onBackward, reference }) => (
    <Box
        title={"Verify your relation"}
        content={
            <div>
                <div className="row">
                    <div className="col s10 offset-s1 subtitle">
                        This is the information {reference.userName} gave about themselves while you worked together.
                    </div>
                </div>
                <div className="row">
                    <div className="col s3 offset-s1">
                        <div className="row">
                            <label>You worked together at</label>
                            <h6>{reference.place}</h6>
                        </div>
                        <div className="row">
                            <label>Their role was</label>
                            <h6>{reference.userRole}</h6>
                        </div>
                    </div>
                    <div className="col s3">
                        <label>between the period</label>
                        <h6>{reference.relationStart} - </h6>
                        <h6>{reference.relationEnd}</h6>
                    </div>
                    <div className="col s4">
                        <label>Their main role was</label>
                        <p>{reference.userResponsibility}</p>
                    </div>
                </div>
            </div>
        }
        onBackward={onBackward}
        onContinue={onNext}
        next={"That's correct"}
    />
)