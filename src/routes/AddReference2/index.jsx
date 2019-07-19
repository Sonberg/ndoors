import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Step from './components/Step';
import WhoIsYourReference from './components/Form.Who';

export default () => {

    const Steps = 
    [{title: 'Who is your reference?', children: WhoIsYourReference}, 
    {title: 'Describe your relation', children: MyComponentTwo},
    {title: 'List your competencies', children: MyComponent},
    {title: 'Leave a personal note', children: MyComponent}]

    const [currentIndex, setIndex] = useState(0);

    return (
        <Container className="mt-5">
            {Steps.map((props, index) => <Step key={index} index={index} currentIndex={currentIndex} setIndex={setIndex} total={Steps.length} {...props} />)}
        </Container>
    )
}

const MyComponent = () => (
    <div>
        <p>Hejsan</p>
    </div>
)


const MyComponentTwo = () => (
    <div>
        <p>Hejsand 2</p>
    </div>
)
