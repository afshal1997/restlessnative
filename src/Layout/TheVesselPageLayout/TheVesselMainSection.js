import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TheVesselMainSection = () => {
    return (
        <div className='theVesselMain mb-5'>
            <Container className="pt-5 pb-5">
                <Row className="pt-5 pb-5">
                    <Col lg={6} className="pt-5 pb-5 text-light">
                        <div className="theVesselMainBannerContent">
                            <h2
                                data-aos="fade-right"
                                data-aos-duration="1500"
                            >
                                <i>The Vessel</i>
                            </h2>
                            <h6 
                                data-aos="fade-right"
                                data-aos-duration="2000"
                            >
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </h6>
                            <a
                                href='https://fareharbor.com/embeds/book/restlessnative/items/?flow=93101&full-items=yes'
                                className='theVesselBookNow'
                                data-aos="fade-right"
                                data-aos-duration="2500"
                            >
                                Book Now
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TheVesselMainSection