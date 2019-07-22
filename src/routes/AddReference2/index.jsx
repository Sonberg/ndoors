import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Step from './components/Step';
import WhoIsYourReference from './components/Form.Who';
import DescribeYourRelation from './components/Form.Describe';
import ListYourCompetences from './components/Form.ListCompetences';
import LeavePersonalNote from './components/Form.LeaveNote';


export default () => {

    const Steps = 
    [{title: 'Who is your reference?', children: WhoIsYourReference}, 
    {title: 'Describe your relation', children: DescribeYourRelation},
    {title: 'List your competencies', children: ListYourCompetences},
    {title: 'Leave a personal note', children: LeavePersonalNote}]

    const [currentIndex, setIndex] = useState(0);

    return (
        <Container className="mt-5">
            {Steps.map((props, index) => <Step key={index} index={index} currentIndex={currentIndex} setIndex={setIndex} total={Steps.length} {...props} />)}
        </Container>
    )
}
