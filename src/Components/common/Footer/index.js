import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import FooterLogo from '../../../assets/header/mainLogo.png'
function Footer() {
    return (
        <div>
            <Container fluid>
                <Row className='align-items-center'>
                    <Col lg={6}>
                        <Row>
                            <Col lg={6}>
                                <h2><FontAwesomeIcon icon={faArrowRight} className="mx-2" />Terms & Conditions</h2>
                            </Col>
                            <Col lg={6}>

                                <h2><FontAwesomeIcon icon={faArrowRight} className="mx-2" />Data Protection Policy</h2>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={2} className='m-auto me-0'>
                        <span>In collaboration with</span>
                        <img src={FooterLogo} alt="" className='footer-logo' />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
