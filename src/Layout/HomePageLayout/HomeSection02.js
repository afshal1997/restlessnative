import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
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
                            <iframe height="330" src="https://www.youtube.com/embed/kEtjN26WQ9E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="Img3 position-relative">
                            <iframe height="330" src="https://www.youtube-nocookie.com/embed/EekNPrWhBSY?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="Img5 position-relative">
                            <iframe height="500" src="https://www.youtube-nocookie.com/embed/EItPLrxHOlM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="Img4 position-relative">
                            <iframe height="330" src="https://www.youtube-nocookie.com/embed/iJML-Ju-SZc?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="Img2 position-relative">
                            <iframe height="500" src="https://www.youtube-nocookie.com/embed/hdQbwJEBSIk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <div className="Img6 position-relative">
                            <iframe height="330" src="https://www.youtube-nocookie.com/embed/V-8PbOeubvI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </Col>
                </Row>
            </Container>
            <PopUp show={showModal} handleClose={handleClose} />
        </div>
    )
}

export default HomeSection02