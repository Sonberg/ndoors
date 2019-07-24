import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Step from './Step';
import { Form } from 'react-final-form';
import { isEmpty, reduce, extend } from 'lodash';

export default ({ steps, onSubmit, children }) => {

  const validate = values => reduce([...steps.map(x => x.validate(values))], extend);

  const [currentIndex, setIndex] = useState(0);

  const renderStep = (props) => (
    <Step
      key={props.index}
      currentIndex={currentIndex}
      setIndex={setIndex}
      total={steps.length}
      {...props} />
  )

  return (
    <Container className="mt-5">
      <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, dirty, values, submitFailed }) => (
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              {steps.map((step, index) => renderStep({
                ...step,
                index,
                submitFailed,
                isValid: isEmpty(step.validate(values))
              }))}
            </Col>
          </Row>
          {children}
        </form >
      )} />
    </Container >
  )
}
