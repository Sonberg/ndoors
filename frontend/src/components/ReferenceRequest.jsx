import React from 'react'
import Badge from './Badge';

export default (reference) => (
    <div className="row valign-wrapper" style={{ marginLeft: '0' }}>
        <div style={{ padding: '1em', border: '1px solid' }}>
            <div className="col s2">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=100&h=100&q=80" alt="" className="circle responsive-img" />
            </div>
            <div className="col s10">
                <strong children="Namn Namnsson" />
                <p>
                    This is a square image. Add the "circle" class to it to make it appear circular.
              </p>
                <div className="divider" />
                <div style={{ display: 'flex', paddingTop: '1em' }}>
                    <Badge children="Verifierad" />
                </div>
            </div>
        </div>
    </div>
)