import React from 'react'
import { Button, Col, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import './home.css'

function MainSection() {
    return (
        <div className='mainSection'>
            <Container fluid>
                <div className="mainBannerHeading">
                    <Col lg={11} className='m-auto'>
                        <h2 className='ps-5 ms-5' data-aos="fade-right" data-aos-duration="1000">come sail</h2>
                        <h2 data-aos="fade-right" data-aos-duration="2000">with us!</h2>
                    </Col>
                    <Col lg={4} className='m-auto me-0 mt-5'>
                        <h5 data-aos="fade-right" data-aos-duration="1000">
                            Lorem Ipsum is simply dummy text of the printing
                        </h5>
                        <Button variant="transparent" className='text-light BtnLink p-0 mt-4' data-aos="fade-right" data-aos-duration="1000"> <FontAwesomeIcon icon={faArrowRight} /> Share your adventure</Button>
                    </Col>
                </div>
            </Container>
        </div>
    )
}

export default MainSection
