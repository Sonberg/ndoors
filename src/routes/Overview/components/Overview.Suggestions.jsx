import React from 'react'
import EmpowerAF from './../../../components/EmpowerAF'
import Button from './../../../components/Button'

const sectionHeader = {
    fontWeight: '600',
    color: '#333'
}


export default () => (
    <div className="row">
        <div className="col s12 card">
            <div className="card-content">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginBottom: '1em'
                }}>
                    <h5 children="Suggested Jobs" style={sectionHeader} />
                    <EmpowerAF />
                </div>
                <p style={{ color: 'rgb(157, 157, 158)' }}>Based on your skills</p>
                <div className="row">
                    <Job title="Truckförare" place="Volvo" date="Today" location="Göteborg" />
                    <Job title="Transportledare" place="PoG" date="Today" location="Göteborg" />
                    <Job title="Lastbilschaufför" place="Postnord" date="Yesterday" location="Uppsala" />
                    <Job title="Truckförare" place="Tetra Pak" date="4 dagar sen" location="Västerås" />
                </div>
            </div>
        </div>
    </div>
);


const Job = ({ title, place, location, date }) => (
    <div className="col s12 card">
        <div className="card-content row" style={{ justifyContent: 'space-between', marginBottom: 0 }}>
            <div className="col">
                <h6 children={title} style={{ fontWeight: 'bold' }} />
                <p children={place} />
                <small children={location} />
            </div>
            <div className="col right">
                <div style={{ background: 'rgb(230, 230, 230)', width: 80, height: 80, borderRadius: 12 }} />
            </div>
        </div>
        <div className="card-action" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <small children={date} />
            <div>
                <Button children={"Apply"} className="btn-small" style={{ marginRight: '1em' }} />
                <Button className="btn-small" style={{ marginRight: '1em' }} >
                    <i className="tiny material-icons">thumb_up</i>
                </Button>
                <Button className="btn-small">
                    <i className="tiny material-icons">thumb_down</i>
                </Button>
            </div>
        </div>
    </div>
);