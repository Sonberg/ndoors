import React, { useState } from 'react'
import { Row, Col, Button, Spinner } from 'react-bootstrap'
import LinkButton from '../../components/Button';

import StepWho from './steps/Step.Who';
import StepDescribe from './steps/Step.Describe';
import StepListCompetences from './steps/Step.ListCompetences';
import StepLeaveNote from './steps/Step.LeaveNote';
import StepContainer from '../../components/Step.Container';
import { post, get } from '../../api';
import useFetch from '../../hooks/useFetch';

export default ({ history }) => {

    const [loading, setLoading] = useState(false);
    const fetchSkills = useFetch('api/skills');

    const Steps = [
        { title: 'Who is your reference?', children: <StepWho />, validate: StepWho.validate },
        { title: 'Describe your relation', children: <StepDescribe />, validate: StepDescribe.validate },
        { title: 'List your competences & abilities', children: <StepListCompetences />, validate: StepListCompetences.validate },
        { title: 'Leave a personal note', children: <StepLeaveNote />, validate: StepLeaveNote.validate }
    ]

    const getUserIdAsync = async ({ email, firstName, lastName }) => {
        const users = await get(`api/users?filter[email]=${email}`);
        if (users && users[0]) {
            return users[0].id;
        }

        const createdUser = await post(`api/users?`, { email, firstName, lastName, type: 'user' });
        return createdUser.id;
    }

    const onSubmit = async ({ firstName, lastName, email, note, skills, ...values }) => {
        setLoading(true);

        // Create request
        await post('api/requests', {
            userId: await getUserIdAsync({ firstName, lastName, email }),
            status: 'pending',
            type: 'request',
            note,
            ...values
        });

        // Add skills
        for (const skill of skills) {
            if (skill.id) {
                continue;
            }

            await post('api/skills', {
                type: 'skill',
                ...skill
            });
        }

        setLoading(false);

        history.push('/overview')
    }

    if (fetchSkills.loading) {
        return null;
    }

    return (
        <StepContainer initialValues={{ skills: fetchSkills.response || [] }} steps={Steps} onSubmit={onSubmit}>
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