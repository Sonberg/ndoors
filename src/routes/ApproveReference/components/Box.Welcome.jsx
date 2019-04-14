import React from 'react'
import Box from '../../../components/Box';

export default ({ onNext, reference }) => (
    <Box
        title={`${reference.userName} added you as a reference`}
        content={
            <div className="row">
                <div className="col s3 offset-s1">
                    <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=60" alt="" className="circle responsive-img" />
                </div>
                <div className="col s7">
                    <h5>Dear {reference.referenceName},</h5>
                    <p>{reference.message}</p>
                </div>
            </div>
        }
        onContinue={onNext}
    />
)