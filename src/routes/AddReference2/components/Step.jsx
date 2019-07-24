import React, { memo } from 'react'
import { Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const badgeStyle = {
    width: '32px',
    height: '32px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%'
}

export default memo(({ index, currentIndex, setIndex, total, title, children, isValid, submitFailed }) => {

    const shouldDisplayContent = index === currentIndex;
    const shouldDisablePrev = index === 0;
    const shouldDisableNext = index + 1 == total;

    const onClick = () => setIndex(index);

    const onClickPrev = () => {
        if (shouldDisablePrev) {
            return
        }
        setIndex(index - 1)
    };

    const onClickNext = () => {
        if (shouldDisableNext) {
            return
        }
        setIndex(index + 1)
    };

    return (
        <Row className="mb-3">
            <Col className="shadow-sm border rounded">
                <Header
                    title={title}
                    isValid={isValid}
                    onClick={onClick}
                    submitFailed={submitFailed} />

                <Content
                    key={currentIndex}
                    shouldDisableNext={shouldDisableNext}
                    shouldDisablePrev={shouldDisablePrev}
                    shouldDisplayContent={shouldDisplayContent}
                    onClickNext={onClickNext}
                    onClickPrev={onClickPrev}
                    children={children} />
            </Col>
        </Row>
    )
});

const Content = ({ shouldDisableNext, shouldDisablePrev, shouldDisplayContent, onClickNext, onClickPrev, children }) => (
    <Row className={`border-top ${shouldDisplayContent ? 'd-flex' : 'd-none'}`}>
        <Col className="p-3">
            {children}
        </Col>
        <Col xs="auto" className="my-3 mr-3 d-flex flex-column justify-content-around">
            <div className={`shadow-sm border cursor-pointer ${shouldDisablePrev ? "disabled-button" : ''}`} style={badgeStyle}>
                <FontAwesomeIcon icon="chevron-up" onClick={onClickPrev} />
            </div>
            <div className={`shadow-sm border cursor-pointer ${shouldDisableNext ? "disabled-button" : ''}`} style={badgeStyle}>
                <FontAwesomeIcon icon="chevron-down" onClick={onClickNext} />
            </div>
        </Col>
    </Row>
);

const Header = ({ title, onClick, isValid, submitFailed }) => (
    <Row>
        <Col className="p-4 cursor-pointer d-flex justify-content-between" onClick={onClick}>
            <div className="h5 m-0" children={title} />
            {submitFailed && isValid ? (
                <div style={badgeStyle} className={'bg-secondary-light text-white'}>
                    <FontAwesomeIcon icon="check" />
                </div>
            ) : null}

        </Col>
    </Row>
)