import React from 'react'
import Badge from './Badge';

export default ({ verified }) => (
    <div className="row valign-wrapper" style={{ marginLeft: '0' }}>
        <div style={{ padding: '1em' }} className="card">
            <div className="col s2">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=200&h=200&q=80" alt="" className="circle responsive-img" />
            </div>
            <div className="col s10">
                <strong children="Namn Namnsson" />
                <p>
                    Hej, kan du skapa vara referens åt mig?
              </p>
                <div className="divider" />
                <div style={{ display: 'flex', paddingTop: '1em', justifyContent: 'space-between', alignItems: 'center' }}>
                    <a class="waves-effect waves-light btn-small" disabled={verified}>Påminn</a>
                    {verified ? (<Badge children="Verifierad" />) : null}
                </div>
            </div>
        </div>
    </div>
)