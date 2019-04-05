import React from 'react'

export default () => (
    <div style={{ marginTop: '3em' }}>
        <div className="row valign-wrapper">
            <div className="col s2">
                <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&h=300&q=60" alt="" className="circle responsive-img" />
            </div>
            <div className="col s10">
                <h5 children={localStorage.getItem('user')} />
                <span className="black-text">

                </span>
            </div>
        </div>
    </div>
);