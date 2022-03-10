import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import HomeSection03Img01 from '../../assets/homeSection/section3img1.jpg'
import HomeSection03Img02 from '../../assets/homeSection/section3img2.jpg'
import HomeSection03Img03 from '../../assets/homeSection/section3img3.jpg'
import HomeSection03Img04 from '../../assets/homeSection/section3img4.jpg'
import HomeSection03Img05 from '../../assets/homeSection/section3img5.jpg'
import HomeSection03Img06 from '../../assets/homeSection/section3img6.jpg'

const HomeSection03 = () => {
    return (
        <div className='NowItYourTurn' id='homeSection03'>
            <Container fluid>
                <div className="NowItYourTurnMainHeading">
                    <Col lg={12}>
                        <h2>Now it's <i>your</i> turn</h2>
                    </Col>

                    <div className='scrollVertically'>
                        <Button variant="link">
                            <img
                                src={HomeSection03Img01}
                                alt="HomeSection03Img01"
                            />
                            <h2><i>Join </i>our challenge on Strava…</h2>
                            <p>328,657 are already participating</p>
                        </Button>
                        <Button variant="link">
                            <img
                                src={HomeSection03Img02}
                                alt="HomeSection03Img02"
                            />
                            <h2><i>Share</i> your adventure on Instagram…</h2>
                            <p>10,203 are already sharing on #localadventurechallenge</p>
                        </Button>
                        <Button variant="link">
                            <img
                                src={HomeSection03Img03}
                                alt="HomeSection03Img03"
                            />
                            <h2><i>Test &amp; Feel</i> the Ducan Spine backpack...</h2>
                            <p>23 participating Mammut Stores</p>
                        </Button>
                        <Button variant="link">
                            <img
                                src={HomeSection03Img04}
                                alt="HomeSection03Img04"
                            />
                            <h2><i>Find</i> a local adventure on FATMAP...</h2>
                            <p>9,123 guidebooks</p>
                        </Button>
                        <Button variant="link">
                            <img
                                src={HomeSection03Img05}
                                alt="HomeSection03Img05"
                            />
                            <h2><i>Get inspired</i> for your local adventures in Switzerland</h2>
                            <p>15 local partners</p>
                        </Button>
                        <Button variant="link">
                            <img
                                src={HomeSection03Img06}
                                alt="HomeSection03Img06"
                            />
                            <h2><i>Get</i> the right adventure gear</h2>
                            <p>1,438 adventure products available</p>
                        </Button>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default HomeSection03