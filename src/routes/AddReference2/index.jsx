import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Step from './components/Step';

export default () => {
    const Steps = 
    [{title: 'Who is your reference?', children: 'Text'}, 
    {title: 'Describe your relation', children: "testtext 2"},
    {title: 'List your competencies', children: "testtext 3"},
    {title: 'Leave a personal note', children: "testtext 3"}]
    const [currentIndex, setIndex] = useState(0);

    return (
        <Container className="mt-5">
            {Steps.map((props, index) => <Step index={index} currentIndex={currentIndex} setIndex={setIndex} total={Steps.length} {...props} />)}
        </Container>
    )
}