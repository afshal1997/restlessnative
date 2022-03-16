import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import AdventuresToGetInspired from '../../Components/HomeComponentSection02/AdventuresToGetInspired'
import { HomeSection02Content } from './HomePageContent'

const HomeSection02 = () => {
    return (
        <div className='homeSection02 mb-5 pb-4' id='homeSection02'>
            <Container fluid>
                <Col lg="6" className='m-auto text-center home-section2 mt-5 mb-5 py-3'>
                    <h1 className='text-center AdventuresToGetYouInspired'>
                        <i>Adventures</i> to get you inspired
                    </h1>
                </Col>
                <Row className="p-4">
                    {
                        React.Children.toArray(
                            HomeSection02Content.map((data) => {
                                return (
                                    <AdventuresToGetInspired {...data} />
                                )
                            })
                        )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default HomeSection02