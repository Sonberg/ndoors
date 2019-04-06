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

const smallText = {
  fontSize: 12,
  fontWeight: 500
}

export default () => (
  <div className="card" style={{ marginTop: '3em' }}>
    <div className="row card-content" style={{ margin: 0 }}>
      <div className="col">
        <div className="row" style={{ marginBottom: 0 }}>
          <div className="col hide-on-med-and-down">
            <img
              className="circle responsive-img"
              style={{ height: 118, width: 118, backgroundColor: '#e6e6e6' }}
              src={require('../../../assets/profile.png')}
            />
          </div>
          <div className="col">
            <h5 style={{ whiteSpace: 'nowrap' }}>
              {localStorage.getItem('user')}
              <span style={styles}>
                <i className="tiny material-icons">check</i>
              </span>
            </h5>
            <p
              style={{ margin: '0 0 0.5em', color: '#9d9d9e' }}
              children="UX Designer"
            />
            <p
              style={{ margin: '0 0 0em', fontSize: 13 }}
              children={localStorage.getItem('email')}
            />
            <p
              style={{ margin: '0 0 0.5em', fontSize: 13 }}
              children="070-165 45 22"
            />
          </div>
        </div>
      </div>

      <div className="col right">
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
            <OverviewUserStats title="People I've referenced" value="2" />
          </div>
        </div>
      </div>
    </div>
  </div>
)
