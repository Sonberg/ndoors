import React from 'react'
import { Row, Col } from 'react-bootstrap'

export default ({ index, currentIndex, setIndex, title, children }) => {
    const shouldDisplayContent = index === currentIndex;
    const onClick = () => setIndex(index);
    const Content = () => (
        <Row className="border-top">
            <Col className="p-3">
                {children}
            </Col>
            <Col sm="auto" className="d-flex align-items-center">
                pil
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
