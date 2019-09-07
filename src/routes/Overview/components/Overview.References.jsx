import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from '../../../components/Link';
import OverviewReferencesItem from './Overview.References.Item';
import useFetch from '../../../hooks/useFetch';

export default ({ user }) => {

    const verifiedRequest = useFetch(`api/requests?filter[createdByUserId]=${user && user.id}&filter[status]=Accepted&include=user,reference.verifications.skill`);
    const pendingRequest = useFetch(`api/requests?filter[createdByUserId]=${user && user.id}&filter[status]=Pending&include=user`);
    const recivedRequest = useFetch(`api/requests?filter[userId]=${user && user.id}&include=createdBy&filter[status]=Pending`);

    const [tab, setTab] = useState(0)

    if (verifiedRequest.loading || pendingRequest.loading || recivedRequest.loading) {
        return null;
    }

    const verified = verifiedRequest.response || [];
    const pending = pendingRequest.response || [];
    const recived = recivedRequest.response || [];

    return (
        <>
            <Row className="mb-4">
                <Tab value={verified.length} color="#bad3c9" label="verified references" tab={0} setTab={setTab} currentTab={tab} />
                <Tab value={pending.length} color="#ffbab3" label="pending requests" tab={1} setTab={setTab} currentTab={tab} />
                <Tab value={recived.length} color="#9ba7b8" label="recived requests" tab={2} setTab={setTab} currentTab={tab} />
            </Row>

            {tab == 0 ? verified.map(x => <OverviewReferencesItem key={x.id} {...x} user={x.user} />) : null}
            {tab == 1 ? pending.map(x => <OverviewReferencesItem key={x.id} {...x} user={x.user}   />) : null}
            {tab == 2 ? recived.map(x => <OverviewReferencesItem key={x.id} {...x} user={x.createdBy} />) : null}
        </>
    );
}


const Tab = ({ value, label, color, tab, currentTab, setTab }) => {
    const updateTab = () => setTab(tab);
    const active = tab == currentTab;

    return (
        <Col onClick={updateTab}>
            <div className={`text-center shadow-sm py-4 rounded`} style={{ border: `1px solid ${active ? color : '#dee2e6'}` }}>
                <span className="h1" children={value} />
                <div className="d-none d-md-block">
                    <small children={label} />
                </div>
            </div>
        </Col>
    );
}


const PendingRequest = ({ user, companyName, jobTitle, note }) => (
    <Row>
        <Col>
            <div className="rounded shadow-sm p-4 mb-3 d-flex border">
                <Col sm="auto" className="h6 mb-0">
                    {user && user.displayName}
                </Col>
                <Col sm="auto">{jobTitle}</Col>
                <Col>{companyName}</Col>
                <Col sm="auto">
                    <FontAwesomeIcon icon="clock" />
                </Col>
            </div>
        </Col>
    </Row>
);

const RecivedRequest = ({ id, createdBy, companyName, jobTitle }) => (
    <Row>
        <Link to={`/requests/${id}/approve`} as={Col}>
            <div className="rounded shadow-sm p-4 mb-3 d-flex border">
                <Col sm="auto" className="h6 mb-0">
                    {createdBy && createdBy.displayName}
                </Col>
                <Col sm="auto">{jobTitle}</Col>
                <Col>{companyName}</Col>
                <Col sm="auto">
                    <FontAwesomeIcon icon="chevron-right" />
                </Col>
            </div>
        </Link>
    </Row>
);