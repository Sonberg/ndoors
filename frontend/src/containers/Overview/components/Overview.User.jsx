import React from 'react'
import OverviewUserStats from './Overview.User.Stats'

const styles = {
    background: '#6c9f9b',
    color: 'white',
    overflow: 'hidden',
    padding: '2px',
    display: 'inline-flex',
    position: 'relative',
    top: '-10px',
    left: '4px',
    borderRadius: '100px',
    opacity: '0.7'
}

const borderLeft = {
    borderLeft: '1px solid #99bcb9',
}

const smallText = {
    fontSize: 12,
    fontWeight: 500
}

const icon = {
    height: 44,
    width: 44,
    borderRadius: 100,
    margin: '0.25em 0'
}

export default () => (
    <div style={{ margin: '3em 1em 0' }}>
        <div className="row valign-wrapper card" style={{ alignItems: 'center', display: 'flex', padding: '1em', justifyContent: 'space-between', marginBottom: 0 }}>
            <div className="col hide-on-med-and-down">
                <div className="circle responsive-img" style={{ height: 118, width: 118, backgroundColor: '#e6e6e6' }} />
            </div>
            <div className="col">
                <h5 style={{ whiteSpace: 'nowrap' }}>
                    {localStorage.getItem('user')}
                    <span style={styles}>
                        <i className="tiny material-icons">check</i>
                    </span>
                </h5>
                <p style={{ margin: '0 0 0.5em', color: '#9d9d9e' }}>
                    UX-Designer
                </p>
                <p style={{ margin: '0 0 0em', fontSize: 13 }}>
                    namn.namnsson@hotmail.se
                </p>

                <p style={{ margin: '0 0 0.5em', fontSize: 13 }}>
                    070-165 45 22
                </p>
            </div>
            <div className="col hide-on-med-and-down" style={borderLeft}>
                <div className="row" style={{ marginBottom: 0 }}>
                    <div className="col s12">
                        <span children="Verified by" style={smallText} />
                    </div>
                    <div className="col">
                        <img src="/assets/images/linkedin.png" style={icon} />
                    </div>
                    <div className="col">
                        <img src="/assets/images/github.png" style={icon} />
                    </div>
                </div>
            </div>
            <div className="col" style={borderLeft}>
                <div className="row" style={{ marginBottom: 0 }}>
                    <div className="col s12">
                        <span children="Statistics" style={smallText} />
                    </div>
                    <div className="col">
                        <OverviewUserStats title="References verified" value="84%" />
                    </div>
                    <div className="col">
                        <OverviewUserStats title="Unique views" value="47%" />
                    </div>
                    <div className="col">
                        <OverviewUserStats title="People I've referenced" value="2" /></div>
                </div>
            </div>
        </div>
    </div >
);