import React, { useEffect } from 'react'
import OverviewUser from './components/Overview.User'
import Link from '../../components/Link'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../store/References';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import OverviewReferences from './components/Overview.References';
import OverviewLinks from './components/Overview.Links';
import OverviewSkills from './components/Overview.Skills';
import { useAuth } from '../../context/auth';

const Overview = ({ loadCreated }) => {

    useEffect(() => { loadCreated(); })

    const { user } = useAuth();

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
                        <Col xs="12" md="6">
                            <Link as="div" to="/add-reference" className="rounded p-3 d-flex h5 mb-3 mb-md-0 bg-secondary-light ">
                                <FontAwesomeIcon icon="plus-circle" className="mr-2 d-none d-md-flex" /> Request reference
                            </Link>
                        </Col>
                        <Col xs="12" md="6">
                            <Link as="div" className="rounded p-3 h5 mb-0 d-flex bg-secondary-light">
                                <FontAwesomeIcon icon="plus-circle" className="mr-2 d-none d-md-flex" /> Submit reference
                            </Link>
                        </Col>
                    </Row>
                    {user && user.id ? (<OverviewReferences user={user} />) : null}
                </Col>
                <Col lg="4">
                    <OverviewSkills />
                    <OverviewLinks />
                </Col>
            </Row>
        </Container>
    )
}

export default connect(
    state => ({
        references: state.references.recived
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Overview)