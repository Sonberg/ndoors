import React from 'react'
import OverviewUserStats from './Overview.User.Stats'
import { Card, Row, Col } from 'react-bootstrap'
import { useAuth } from '../../../context/auth'

export default () => {
    const { user } = useAuth();

    return (
        <>
            <Row className="align-items-center mt-5 pb-3">
                <Col sm="12" md="5">
                    <h1 children={user && user.name} />
                </Col>
                <Col className="d-none d-md-block" md="7">
                    <Row>
                        <Col>
                            <OverviewUserStats title="References verified" value="84%" />
                        </Col>
                        <Col>
                            <OverviewUserStats title="Unique views" value="47%" />
                        </Col>
                        <Col>
                            <OverviewUserStats title="People I've referenced" value="2" />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className="border-bottom" />
                </Col>
            </Row>
        </>);
}