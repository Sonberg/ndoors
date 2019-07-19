import React, { Component } from 'react'
import OverviewUser from './components/Overview.User'
import Button from '../../components/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import OverviewReference from './components/Overview.Reference';
import { actionCreators } from '../../store/References';
import { Container, Row, Col, Card } from 'react-bootstrap';

class Overview extends Component {

    componentDidMount() {
        this.props.loadCreated();
    }

    render() {
        const { references } = this.props;

        return (
            <Container style={{ width: '80%' }}>
                <Row>
                    <Col>
                        <OverviewUser />
                    </Col>
                </Row>
                <Row>
                    <Col className="my-4">
                        <Button to="/add-reference" className="mr-4">Request reference</Button>
                        <Button to="/add-reference">Submit reference</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <span className="h1" children="16" />
                                <small children="verified references" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <span className="h1" children="16" />
                                <small children="pending references" />
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="shadow-sm">
                            <Card.Body>
                                <span className="h1" children="16" />
                                <small children="sent references" />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default connect(
    state => ({
        references: state.references.recived
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Overview)