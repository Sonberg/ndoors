import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Step from './components/Step';

export default () => {
    const steps = [Step, Step, Step, Step, Step, Step, Step, Step, Step, Step];
    const Test = [{title: 'Titel', children: 'Text'}]
    const [currentIndex, setIndex] = useState(0);

    return (
        <Container className="mt-5">
            {Test.map((props, index) => <Step index={index} currentIndex={currentIndex} setIndex={setIndex} {...props} />)}
        </Container>
    )
}