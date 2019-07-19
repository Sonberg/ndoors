import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default ({ index, currentIndex, setIndex, total, title, children }) => {
    const shouldDisplayContent = index === currentIndex;
    const shouldDisablePrev = index === 0;
    const shouldDisableNext = index + 1 == total;
    const onClick = () => setIndex(index);
    const onClickPrev = () => {
        if (shouldDisablePrev){
            return 
        }
        setIndex(index - 1)};
    const onClickNext = () => {
        if (shouldDisableNext){
           return
        }
        setIndex(index + 1)
    };
    const Content = () => (
        <Row className="border-top">
            <Col className="p-3">
                {children}
            </Col>
            <Col sm="auto" className="p-3">
                <Row className={`mb-3 ${shouldDisablePrev ? "disabled-button" : null}`}>
                    <FontAwesomeIcon icon="chevron-circle-up" size="2x" onClick={onClickPrev} /> 
                </Row>
                <Row className={`${shouldDisableNext ? "disabled-button" : null}`}>
                    <FontAwesomeIcon icon="chevron-circle-down" size="2x" onClick={onClickNext}  /> 
                </Row>
            </Col>
        </Row>
    );

    return (
        <Row>
            <Col className="shadow-sm">
                <Row>
                    <Col className="p-3" onClick={onClick}>
                        {title} 
                    </Col>
                </Row>
                    {shouldDisplayContent ? <Content /> : null}
            </Col>
        </Row>
    )
}
