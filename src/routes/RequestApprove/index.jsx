import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap';
import useFetch from '../../hooks/useFetch';
//import LinkButton from '../../components/Button';

import StepContainer from '../../components/Step.Container';
import StepMessage from './steps/Step.Message';
import StepCompetences from './steps/Step.Competences';
import StepContact from './steps/Step.Contact';
import { post, put, patch } from '../../api';
import { useAuth } from '../../context/auth';


export default ({ match, history }) => {
  const requestId = match.params.request_id;
  const { response, loading } = useFetch(`api/requests/${requestId}?include=createdBy,createdBy.skills`);
  const { user } = useAuth();

  if (loading) {
    return null;
  }

  if (!response) {
    return <RequestNotFound />;
  }

  if (user && user.id !== response.userId) {
    return <RequestNotYours/>
  }

  const steps = [
    { title: 'Competences', children: <StepCompetences skills={response.createdBy.skills} />, validate: StepCompetences.validate },
    { title: 'Message', children: <StepMessage />, validate: StepMessage.validate },
    { title: 'Contact information', children: <StepContact />, validate: StepContact.validate }
  ]

  const onSubmit = async ({ skills, message }) => {

    // Create reference
    const reference = await post('api/references', {
      type: 'reference',
      message,
      requestId
    });

    // Add Skill verifications
    for (const skillId of skills) {
      await post(`api/skills/${skillId}/verifications`, {
        referenceId: reference.id,
        type: 'skillVerification'
      });
    }

    history.push('/overview')
  }

  const onDeny = async () => {
    await patch(`api/requests/${requestId}`, {
      type: 'request',
      status: 'Denied'
    });

    history.push('/overview')
  }

  return (
    <>
      <Container>
        <Row className="mt-5">
          <Col>
            <h3>Reference request</h3>
          </Col>
          <Col sm="auto">
            {response.created}
          </Col>
        </Row>

        <Row className="mt-2">
          <Col>
            <p>{response.createdBy.displayName} would like to ask if you can be her/his reference for the time at {response.companyName}</p>
            {response.note ? (<p className="border p-3 mb-0">{response.note}</p>) : null}
          </Col>
        </Row>

      </Container>
      <StepContainer initialValues={{ skills: [] }} onSubmit={onSubmit} steps={steps}>
        <Row>
          <Col className="d-flex justify-content-center">
            <Button size="lg" onClick={onDeny} variant="outline-danger" className="mr-3">Deny</Button>
            <Button size="lg" variant="secondary" type="submit">Approve request</Button>
          </Col>
        </Row>
      </StepContainer>
    </>
  );
}

const RequestNotFound = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <h1>Not Found</h1>
        <h5 className="text-muted" children="The request you are looking for could not be found" />
      </Col>
    </Row>
  </Container>
)

const RequestNotYours = () => (
  <Container className="mt-5">
    <Row>
      <Col>
        <h1>Not yours</h1>
        <h5 className="text-muted" children="You cannot accept your own request" />
      </Col>
    </Row>
  </Container>
)