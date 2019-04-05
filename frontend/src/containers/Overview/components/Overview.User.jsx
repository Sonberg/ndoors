import React from 'react'

export default () => (
    <div style={{ marginTop: '3em' }}>
        <div className="row valign-wrapper" style={{ alignItems: 'center', display: 'flex' }}>
            <div className="col s3">
                <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=60" alt="" className="circle responsive-img" />
            </div>
            <div className="col s9">
                <h5 children={localStorage.getItem('user')} />
                <p style={{ margin: '0 0 0.5em' }}>
                    Email: kalle@hotmail.se
                </p>
                <p style={{ margin: 0 }}>
                    Mobilnr: 070-165 45 22
                </p>
            </div>
        </div>
    </div>
);