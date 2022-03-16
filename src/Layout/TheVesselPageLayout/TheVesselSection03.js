import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import theVesselImg02 from '../../assets/theVessel/theVesselImg02.jpg'

const TheVesselSection03 = () => {
    return (
        <div className='TheVesselSection03'>
            <Container>
                <Row>
                    <Col lg={5} className='m-auto'>
                        <div
                            className="TheVesselSection03Ul"
                            data-aos="fade-right"
                            data-aos-duration="1500"
                        >
                            <ul>
                                <li>
                                    Fine dining and luxurious seating
                                </li>
                                <li>
                                    Stunning views at any vantage point
                                </li>
                                <li>
                                    Our 42 foot catamaran is on a relaxed, level plane
                                </li>
                                <li>
                                    Fresh caught meals can be enjoyed in the lap of luxury
                                </li>
                                <li>
                                    Setting sail and sitting just behind the bowsprit
                                </li>
                                <li>
                                    Lounge near the trampoline with a cocktail as you sail
                                </li>
                                <li>
                                    Layout on the trampoline and watch the dolphins swim
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <img
                            src={theVesselImg02}
                            alt="theVesselImg02"
                            className='w-100 shadow-lg'
                            data-aos="fade-left"
                            data-aos-duration="1500"
                        />
                    </Col>
                </Row>

                <a
                    href='https://fareharbor.com/embeds/book/restlessnative/items/?flow=93101&full-items=yes'
                    className='theVesselBookNow bg-primary m-auto mt-5 mb-5'>
                    Book Now
                </a>
            </Container>
        </div>
    )
}

export default TheVesselSection03