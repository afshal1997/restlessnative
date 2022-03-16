import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import FooterLogo from '../../../assets/header/Logo.png'
function Footer() {


    return (
        <footer className='footer'>
            <Container fluid>
                <div id="TA_cdsscrollingravenarrow595" className="TA_cdsscrollingravenarrow">
                    <ul id="3iTVfWVLmh" className="TA_links Rr2JGs">
                        <li id="xH6wnAzK13" className="TaBjNElyGvWT">
                            <a
                                target="_blank"
                                href="https://www.tripadvisor.com/Attraction_Review-g34345-d1113820-Reviews-Restless_Native_Charters-Key_West_Florida_Keys_Florida.html">
                                <img
                                    src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_vertical.svg"
                                    alt="TripAdvisor"
                                    className="widEXCIMG"
                                    id="CDSWIDEXCLOGO" />
                            </a>
                        </li>
                    </ul>
                </div>
                <Row className='align-items-center px-5'>
                    <Col lg={6}>
                        <Row>
                            <Col lg={5}>
                                <h2 className='footerLinks'><span><FontAwesomeIcon icon={faArrowRight} className="mx-2 footerIcon" /></span>Terms & Conditions</h2>
                            </Col>
                            <Col lg={6}>
                                <h2 className='footerLinks'><span><FontAwesomeIcon icon={faArrowRight} className="mx-2 footerIcon" /></span>Data Protection Policy</h2>
                            </Col>
                        </Row>

                    </Col>
                    <Col lg={3} className='m-auto me-0 text-center footer-logo'>
                        <span>In collaboration with</span>
                        <img src={FooterLogo} alt="FooterLogo" />
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer
