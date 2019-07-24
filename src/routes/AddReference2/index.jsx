import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import LinkButton from '../../components/Button';
import WhoIsYourReference from './components/Form.Who';
import DescribeYourRelation from './components/Form.Describe';
import ListYourCompetences from './components/Form.ListCompetences';
import LeavePersonalNote from './components/Form.LeaveNote';
import StepContainer from '../../components/Step.Container';

export default () => {
    const Steps = [
        { title: 'Who is your reference?', children: <WhoIsYourReference />, validate: WhoIsYourReference.validate },
        { title: 'Describe your relation', children: <DescribeYourRelation />, validate: DescribeYourRelation.validate },
        { title: 'List your competencies', children: <ListYourCompetences />, validate: ListYourCompetences.validate },
        { title: 'Leave a personal note', children: <LeavePersonalNote />, validate: LeavePersonalNote.validate }
    ]

    const onSubmit = async (values) => {
        console.log(values);
    }

    return (
        <StepContainer steps={Steps} onSubmit={onSubmit}>
            <Row>
                <Col className="d-flex justify-content-center">
                    <LinkButton to="/overview" size="lg" className="mr-3">Cancel</LinkButton>
                    <Button variant="secondary" size="lg" type="submit">Submit request</Button>
                </Col>
            </Row>
        </StepContainer>
    );
}