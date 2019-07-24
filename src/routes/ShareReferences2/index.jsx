import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import LinkButton from '../../components/Button';
import StepSelect from './steps/Step.Select.jsx';
import StepContainer from '../../components/Step.Container';

export default () => {

  const Steps = [
    { title: 'Select references', children: <StepSelect />, validate: StepSelect.validate }
  ]

  const onSubmit = async (values) => {
    console.log(values);
  }

  return (
    <StepContainer steps={Steps} onSubmit={onSubmit}>
      <Row>
        <Col className="d-flex justify-content-center">
          <LinkButton to="/overview" size="lg" className="mr-3">Cancel</LinkButton>
          <Button variant="secondary" size="lg" type="submit">Create link</Button>
        </Col>
      </Row>
    </StepContainer >
  )
}
