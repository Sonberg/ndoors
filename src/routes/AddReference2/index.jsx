import React, { useState } from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import LinkButton from '../../components/Button';
import Step from './components/Step';
import { Form } from 'react-final-form';
import { isEmpty } from 'lodash';
import WhoIsYourReference from './components/Form.Who';
import DescribeYourRelation from './components/Form.Describe';
import ListYourCompetences from './components/Form.ListCompetences';
import LeavePersonalNote from './components/Form.LeaveNote';

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

    const validate = values => ({
        ...WhoIsYourReference.validate(values),
        ...DescribeYourRelation.validate(values),
        ...ListYourCompetences.validate(values),
        ...LeavePersonalNote.validate(values)
    })

    const [currentIndex, setIndex] = useState(0);

    const renderStep = (props) => (
        <Step
            key={props.index}
            currentIndex={currentIndex}
            setIndex={setIndex}
            total={Steps.length}
            {...props} />
    )

    return (
        <Container className="mt-5">
            <Form onSubmit={onSubmit} validate={validate} render={({ handleSubmit, dirty, values, submitFailed }) => (
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            {Steps.map((step, index) => renderStep({
                                ...step,
                                index,
                                submitFailed,
                                isValid: isEmpty(step.validate(values))
                            }))}
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex justify-content-center">
                            <LinkButton to="/overview" size="lg" className="mr-3">Cancel</LinkButton>
                            <Button variant="secondary" size="lg" type="submit" disabled={!dirty}>Submit request</Button>
                        </Col>
                    </Row>
                </form >
            )} />
        </Container >
    )
}
