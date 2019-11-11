import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export default function header() {
    return (
        <div className="header">
            <Container>
                <Row>
                    <Col sm={2}>Logo</Col>
                    <Col sm={6}>Navigation</Col>
                    <Col sm={{span:2, offset: 2}}>login logout</Col>
                </Row>
            </Container>
        </div>
    )
}
