import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Img1 from '../../assets/homeSection/section2.1.jpg'
import Img2 from '../../assets/homeSection/section2.2.jpg'
import Img3 from '../../assets/homeSection/section2.3.JPG'
import Img4 from '../../assets/homeSection/section2.4.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import PopUp from '../../Components/common/PopUp'
import './home.css'

const HomeSection02 = () => {
    const [showModal, setModal] = useState(false)
    const handleClose = () => {
        setModal(false)
    }
    const openModal = () => {
        setModal(false)
    }
    return (
        <div className='homeSection02 mb-5 pb-4' id='homeSection02'>
            <Container fluid>
                <Col lg="6" className='m-auto text-center home-section2 mt-5 mb-5 py-3'>
                    <h1 className='text-center AdventuresToGetYouInspired'>
                        <i>Adventures</i> to get you inspired
                    </h1>
                </Col>
                <Row className="p-4">
                    <Col lg={6}>
                        <div className="Img1 position-relative" onClick={openModal}>
                            <a href="https://fareharbor.com/embeds/book/restlessnative/items/105628/calendar/2022/03/?full-items=yes">
                                <img src={Img1} alt="Img1" className='w-100' />
                                <h3 data-aos="zoom-in" data-aos-duration="1500"><span>01</span> Explore the Keys</h3>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                        <div className="Img3 position-relative">
                            <a href="https://fareharbor.com/embeds/book/restlessnative/items/115709/calendar/2022/03/?full-items=yes">
                                <img src={Img3} alt="Img3" className='w-100' />
                                <h3 data-aos="zoom-up" data-aos-duration="1500"><span>03</span> Sleep Under The Stars</h3>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="Img2 position-relative">
                            <a href="https://fareharbor.com/embeds/book/restlessnative/items/105623/calendar/2022/03/?full-items=yes">
                                <img src={Img2} alt="Img2" className='w-100' />
                                <h3 data-aos="zoom-in" data-aos-duration="1500"><span>02</span> Enjoy The Sunset</h3>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </a>
                        </div>
                        <div className="Img4 position-relative">
                            <img src={Img4} alt="Img4" className='w-100' />
                            <h3 data-aos="zoom-in" data-aos-duration="1500"><span>04</span> Overnight Adventure</h3>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default HomeSection02