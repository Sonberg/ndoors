import React, { useEffect } from 'react'
import OverviewUser from './components/Overview.User'
import Link from '../../components/Link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store/References';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Overview = ({ loadCreated }) => {

    useEffect(() => { loadCreated(); })

    return (
        <Container>
            <Row>
                <Col>
                    <OverviewUser />
                </Col>
            </Row>
            <Row>
                <Col sm="12" lg="8">
                    <Row className="my-4">
                        <Col>
                            <Link as="div" to="/add-reference" className="rounded p-4 h5 mb-0 bg-secondary-light">
                                <FontAwesomeIcon icon="plus-circle" className="mr-2" /> Request reference
                            </Link>
                        </Col>
                        <Col>
                            <Link as="div" className="rounded p-4 h5 mb-0 bg-secondary-light">
                                <FontAwesomeIcon icon="plus-circle" className="mr-2" /> Submit reference
                            </Link>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Tab value="26" color="#ffbab3" label="verified references" />
                        <Tab value="16" label="pending references" />
                        <Tab value="6" label="sent references" />
                    </Row>
                    <TabContent />
                    <TabContent />
                    <TabContent />
                    <TabContent />
                    <TabContent />
                    <TabContent />
                    <TabContent />
                    <TabContent />
                </Col>
                <Col lg="4">
                </Col>
            </Row>
        </Container>
    )
}

const Tab = ({ value, label, color }) => (
    <Col>
        <div className={`text-center shadow-sm py-4 rounded`} style={{ border: `1px solid ${color ? color : 'none'}` }}>
            <span className="h1" children={value} />
            <div>
                <small children={label} />
            </div>
        </div>
    </Col>
);

const TabContent = ({ }) => (
    <Row className="">
        <Col>
            <div className="rounded shadow-sm p-4 mb-3 d-flex">
                <Col className="h6 mb-0">
                    Hanna Lundell
                </Col>
                <Col>CEO</Col>
                <Col>Google</Col>
                <Col sm="auto">Icon</Col>
            </div>
        </Col>
    </Row>
);

export default connect(
    state => ({
        references: state.references.recived
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Overview)