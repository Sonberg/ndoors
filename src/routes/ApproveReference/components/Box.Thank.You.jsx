import React from 'react'
import Box from '../../../components/Box';

export default ({ reference, onBackward }) => (
    <Box
        title={"Nice referencing!"}
        content={
            <div>
                <div className="row">
                    <div className="col s10 offset-s1 subtitle">
                        You've helped {reference.userName} on their way to land a new job.
                                    </div>
                </div>
                <div className="row">
                    <div className="col s2 offset-s1 circle" >
                        <i className="material-icons large" style={{ color: '#BAD3c9', fontSize: '7rem', marginTop: '10px' }}>check_circle</i>
                    </div>
                    <div className="col s3 offset-s1" style={{ borderRight: '1px solid #BAD3c9', height: '100px' }}>
                        <label className="row">Need a reference of your own?</label>
                        <div className="row">
                            <a
                                href="/add-reference"
                                className="col s11 waves-effect waves-light btn frontButton"
                                onClick={() => { }}
                            >
                                Add referent
                                            </a>
                        </div>
                    </div>
                    <div className="col s4" style={{ marginLeft: '15px', height: '100px' }}>
                        <label className="row">Do you want to get notified when {reference.userName} gets employed?</label>
                        <div className="row">
                            <a
                                href="/"
                                className="col s11 waves-effect waves-light btn frontButton"
                                onClick={onBackward}
                            >
                                Sign up
                                            </a>
                        </div>
                    </div>
                </div>
            </div>
        }
    />
)