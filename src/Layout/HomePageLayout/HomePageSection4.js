import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import section3img19 from '../../assets/homeSection/section3img19.jpg'
import section3img18 from '../../assets/homeSection/section3img18.jpg'
import section3img17 from '../../assets/homeSection/section3img17.jpg'
const HomePageSection4 = () => {
   return (
      <div>
         <div className="NowItYourTurnMainHeading my-5">
            <div className="col-lg-6 m-auto">
               <h2 className='text-center'>
                  ... and<i> win</i> one of the following
               </h2>
            </div>
         </div>
         <Container fluid>
            <Row className='mt-5 pt-5 images-in-section4'>
               <Col className='position-relative' lg={4}>
                  <div className='position-relative'>
                     <div className="position-absolute text-center text-light  m-0 me-auto">
                        <p>
                           Second prize
                        </p>
                        <h1 className='m-auto col-lg-8'>
                           Recovery Series sleeping bag
                        </h1>
                     </div>
                     <img src={section3img17} className="w-100" alt="" />
                  </div>
               </Col>
               <Col className='position-relative' lg={4}>
                  <div className='position-relative'>
                     <div className="position-absolute text-center text-light  m-0 me-auto">
                        <p>
                           Grand prize
                        </p>
                        <h1 className='m-auto col-lg-8'>
                           €5000 Switzerland adventure trip
                        </h1>
                     </div>
                     <img src={section3img18} className="w-100" alt="" />
                  </div>
               </Col>
               <Col className='position-relative' lg={4}>
                  <div className='position-relative'>
                     <div className="position-absolute text-center text-light  m-0 me-auto">
                        <p>
                           Third prize
                        </p>
                        <h1 className='m-auto col-lg-8'>
                           Duncan Spine backpack
                        </h1>
                     </div>
                     <img src={section3img19} className="w-100" alt="" />
                  </div>
               </Col>
            </Row>
         </Container>
      </div>
   )
}

export default HomePageSection4