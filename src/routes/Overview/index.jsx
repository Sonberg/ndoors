import React, { Component } from 'react'
import OverviewUser from './components/Overview.User'
import OverviewSkills from './components/Overview.Skills'
import OverviewSuggestions from './components/Overview.Suggestions'
import Button from '../../components/Button';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import OverviewReference from './components/Overview.Reference';
import { actionCreators } from '../../store/References';
import { Container, Row, Col } from 'react-bootstrap';


const sectionHeader = {
    fontWeight: '600',
    color: '#333'
}

class Overview extends Component {

    componentDidMount() {
        this.props.loadCreated();
    }

    render() {
        const { references } = this.props;

        return (
            <Container style={{ width: '80%' }}>
                <Row>
                    <Col sm='12' children={<OverviewUser />} />
                    <Col sm='7'>
                        {renderLinks(references)}
                        <h5 children="Requested references" style={sectionHeader} />
                        {references.map((x, index) => <OverviewReference key={index} {...x} />)}

                    </Col>
                </Row>
            </Container>
        )
    }
}
const renderLinks = (references) => (
    <div className="py-3 d-flex justify-content-between">
        {references.length ? <Link to="/shared-references"><Button children="Share references" /> </Link> : null}
        <Button as="a" href="/add-reference"> Add references</Button>
    </div>
)

export default connect(
    state => ({
        references: state.references.recived
    }),
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Overview)