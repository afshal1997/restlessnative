import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img1 from '../../assets/homeSection/section2.1.jpg'
import Img2 from '../../assets/homeSection/section2.2.jpg'
import Img3 from '../../assets/homeSection/section2.3.JPG'
import Img4 from '../../assets/homeSection/section2.4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import './home.css'

const HomeSection02 = () => {
    return (
        <div className='homeSection02'>
            <Container fluid>
                <Col lg="6" className='m-auto text-center home-section2 mt-5 mb-5 py-3'>
                    <h1 className='text-center AdventuresToGetYouInspired'>
                        <i>Adventures</i> to get you inspired
                    </h1>
                </Col>
                <Row className="p-4">
                    <Col lg={6}>
                        <div className="Img1 position-relative">
                            <img src={Img1} alt="Img1" className='w-100' />
                            <h3><span>01</span> Lorem Ipsum</h3>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="Img3 position-relative">
                            <img src={Img3} alt="Img3" className='w-100' />
                            <h3><span>03</span> dummy text</h3>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="Img2 position-relative">
                            <img src={Img2} alt="Img2" className='w-100' />
                            <h3><span>02</span>  Lorem Ipsum</h3>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="Img4 position-relative">
                            <img src={Img4} alt="Img4" className='w-100' />
                            <h3><span>04</span> dummy text</h3>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HomeSection02