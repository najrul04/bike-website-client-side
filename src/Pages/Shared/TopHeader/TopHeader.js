import React from 'react';
import './TopHeader.css';
import { Col, Container, Row } from 'react-bootstrap';

const TopHeader = () => {
    return (
        <div className="top-header p-1">
            <Container>
                <Row className="d-flex align-items-center">
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="phone d-flex fw-bold text-light text-center">
                        <i class="fas fa-phone-volume"></i>
                        <p className="mt-1">+1-202-555-0188</p>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={6} lg={6}>
                        <div className="social-icons">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-linkedin-in"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default TopHeader;