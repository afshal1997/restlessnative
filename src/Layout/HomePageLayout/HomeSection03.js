import React from 'react'
import { Button, Col, Container } from 'react-bootstrap'
import HomeSection03Img01 from '../../assets/homeSection/section3img1.jpg'
import HomeSection03Img02 from '../../assets/homeSection/section3img2.jpg'
import HomeSection03Img03 from '../../assets/homeSection/section3img3.jpg'
import HomeSection03Img04 from '../../assets/homeSection/section3img4.jpg'
import HomeSection03Img05 from '../../assets/homeSection/section3img5.jpg'
import HomeSection03Img06 from '../../assets/homeSection/section3img6.jpg'
import BookNowButton from '../../Components/common/bookNowButton'
const HomeSection03 = () => {
    return (
        <div className='NowItYourTurn' id='homeSection03'>
            <Container fluid>
                <div className="NowItYourTurnMainHeading">
                    <Col lg={12}>
                        <h2>Now it's <i>your</i> turn</h2>
                    </Col>

                    <div className='scrollVertically'>
                        <a href="https://fareharbor.com/embeds/book/restlessnative/?full-items=yes" onclick="return !(window.FH && FH.open({ shortname:  'restlessnative', fallback: 'simple', fullItems: 'yes', view: 'items' })); " variant="link">
                            <img
                                src={HomeSection03Img01}
                                alt="HomeSection03Img01"
                            />
                            <h3><i>Half Day Sail</i></h3>
                            <BookNowButton />
                            <p>328,657 are already participating</p>
                        </a>
                        <a href="https://fareharbor.com/embeds/book/restlessnative/?full-items=yes" onclick="return !(window.FH && FH.open({ shortname:  'restlessnative', fallback: 'simple', fullItems: 'yes', view: 'items' })); " variant="link">
                            <img
                                src={HomeSection03Img02}
                                alt="HomeSection03Img02"
                            />
                            <h3><i>Sunset Sail</i></h3>
                            <BookNowButton />
                            <p>$1000 to $2,000 | 3 hours | 6 guests | Picture perfect sunset cruise</p>
                        </a>
                        <a href="https://fareharbor.com/embeds/book/restlessnative/?full-items=yes" onclick="return !(window.FH && FH.open({ shortname:  'restlessnative', fallback: 'simple', fullItems: 'yes', view: 'items' })); " variant="link">
                            <img
                                src={HomeSection03Img03}
                                alt="HomeSection03Img03"
                            />
                            <h3><i>Epic Sail</i></h3>
                            <BookNowButton />
                            <p>$2,500 to $3,500 | 12 hours | 6 guests | See the Keys by SEA!</p>
                        </a>
                        <a href="https://fareharbor.com/embeds/book/restlessnative/?full-items=yes" onclick="return !(window.FH && FH.open({ shortname:  'restlessnative', fallback: 'simple', fullItems: 'yes', view: 'items' })); " variant="link">
                            <img
                                src={HomeSection03Img04}
                                alt="HomeSection03Img04"
                            />
                            <h3><i>Special Events</i></h3>
                            <BookNowButton />
                        </a>
                        <a href="https://fareharbor.com/embeds/book/restlessnative/?full-items=yes" onclick="return !(window.FH && FH.open({ shortname:  'restlessnative', fallback: 'simple', fullItems: 'yes', view: 'items' })); " variant="link">
                            <img
                                src={HomeSection03Img05}
                                alt="HomeSection03Img05"
                            />
                            <h3><i>3/4 Day Sail</i></h3>
                            <BookNowButton />
                            <p>$1,400 to $2,400  | 6 Hour Sail | Max 6 People Private Charter</p>
                        </a>
                        <a href="https://fareharbor.com/embeds/book/restlessnative/?full-items=yes" onclick="return !(window.FH && FH.open({ shortname:  'restlessnative', fallback: 'simple', fullItems: 'yes', view: 'items' })); " variant="link">
                            <img
                                src={HomeSection03Img06}
                                alt="HomeSection03Img06"
                            />
                            <h3><i>Overnight Expedition</i></h3>
                            <BookNowButton />
                            <p>$2500 to $3,500| Private Charter | Spend the Night On the Water! | Max 4 people</p>
                        </a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSection03