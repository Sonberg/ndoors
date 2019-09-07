import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import LinkButton from '../../components/Button';
import StepContainer from '../../components/Step.Container';

import StepSelect from './steps/Step.Select.jsx';
import StepOptions from './steps/Step.Options.jsx';
import useFetch from '../../hooks/useFetch';
import { useAuth } from '../../context/auth';

export default () => {
  const { user } = useAuth();
  const references = useFetch(`api/references?filter[userId]=${user && user.id}&include=createdBy`);


  const Steps = [
    { title: 'Select references', children: <StepSelect references={references.response || []} />, validate: StepSelect.validate },
    { title: 'Share options', children: <StepOptions />, validate: StepOptions.validate }
  ]

  const onSubmit = async (values) => {
    console.log(values);
  }

  return (
    <StepContainer steps={Steps} onSubmit={onSubmit} initialValues={{ neverExpires: true }} >
      <Row>
        <Col className="d-flex justify-content-center">
          <LinkButton to="/overview" size="lg" className="mr-3">Cancel</LinkButton>
          <Button variant="secondary" size="lg" disabled={!references.response || !references.response.length} type="submit">Create link</Button>
        </Col>
      </Row>
    </StepContainer >
  )
}
