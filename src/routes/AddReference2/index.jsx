import React, { useState } from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import LinkButton from '../../components/Button';
import WhoIsYourReference from './components/Form.Who';
import DescribeYourRelation from './components/Form.Describe';
import ListYourCompetences from './components/Form.ListCompetences';
import LeavePersonalNote from './components/Form.LeaveNote';
import StepContainer from '../../components/Step.Container';
import { post } from '../../api';
import { useAuth } from '../../context/auth';

export default () => {

    const [loading, setLoading] = useState(false);
    const { user } = useAuth();

    const Steps = [
        { title: 'Who is your reference?', children: <WhoIsYourReference />, validate: WhoIsYourReference.validate },
        { title: 'Describe your relation', children: <DescribeYourRelation />, validate: DescribeYourRelation.validate },
        { title: 'List your competencies', children: <ListYourCompetences />, validate: ListYourCompetences.validate },
        { title: 'Leave a personal note', children: <LeavePersonalNote />, validate: LeavePersonalNote.validate }
    ]

    const upsertUser = async ({ email, phoneNumber }) => {
        return null;
    }

    const onSubmit = async ({ email, phoneNumber, ...values }) => {
        setLoading(true);
        const requestedBy = await upsertUser({ email, phoneNumber });
        const response = await post('api/references', { referenceFor: user.id, referenceBy: requestedBy.id });
        setLoading(false);
        console.log(values);
    }

    return (
        <StepContainer steps={Steps} onSubmit={onSubmit}>
            <Row>
                <Col className="d-flex justify-content-center">
                    <LinkButton to="/overview" size="lg" className="mr-3" disabled={loading}>Cancel</LinkButton>
                    <Button variant="secondary" size="lg" type="submit" disabled={loading}>
                        {loading ? (<Spinner animation="border" />) : "Submit request"}
                    </Button>
                </Col>
            </Row>
        </StepContainer>
    );
}