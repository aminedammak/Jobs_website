import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Navigation from "./Navigation";

export default function header() {
    return (
        <div className="header">
            <Container>
                <Navigation />
            </Container>
        </div>
    )
}
