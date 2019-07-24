import React from 'react'
import { ColoredRow } from '../../../components/ColoredRow';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default () => (
  <Container fluid as={ColoredRow} bgColor={'F2F6F6'}>
    <Container className="mb-5">
      <Row className="mb-5">
        <Col>
          <h1>
            How it works
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <Image src='assets/images/icon-work.svg' />
          <div>Add your references</div>
        </Col>
        <Col className="text-center">
          <Image src='assets/images/icon-phone.svg' />
          <div>Wait for referent to verify</div>
        </Col>
        <Col className="text-center">
        <Image src='assets/images/icon-letter.svg' />
          <div>Share references with employers</div>
        </Col>
        <Col className="text-center">
        <Image src='assets/images/icon-handshake.svg' />
          <div>Land your dreamjob</div>
        </Col>
      </Row>


    </Container>
  </Container>
);


{/* <div className="row" style={{ textAlign: 'center', margin: '70px 10%' }}>
        <div className="col s3">
          <IconImage src='assets/images/icon-work.svg' />
          <IconText>Add your references</IconText>
        </div>
        <div className="col s3">
          <IconImage src='assets/images/icon-phone.svg' />
          <IconText>Wait for referent to verify</IconText>
        </div>
        <div className="col s3">
          <IconImage src='assets/images/icon-letter.svg' />
          <IconText>Share references with employers</IconText>
        </div>
        <div className="col s3">
          <IconImage src='./../assets/icon-handshake.svg' />
          <IconText>Land your dreamjob</IconText>
        </div>
      </div> */}