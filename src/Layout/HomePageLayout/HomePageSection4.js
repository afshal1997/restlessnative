import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import section3img19 from '../../assets/homeSection/section3img19.jpg'
import section3img18 from '../../assets/homeSection/section3img18.jpg'
import section3img17 from '../../assets/homeSection/section3img17.jpg'
const HomePageSection4 = () => {
   return (
      <div id='homeSection04'>
         <Container fluid>
            <div className="NowItYourTurnMainHeading my-5">
               <div className="col-lg-6 m-auto">
                  <h2 className='text-center mt-5'>...Our<i> Contest</i></h2>
               </div>
            </div>
            <Row className='mt-5 pt-5 images-in-section4'>
               <Col className='position-relative section4Card01' lg={4}>
                  <div className='position-relative'>
                     <div className="position-absolute text-center text-light m-0 me-auto w-100">
                        <p className='mt-5 pt-4'>
                           Second prize
                        </p>
                        <h2 className='m-auto col-lg-12'>
                           Recovery Series sleeping bag
                        </h2>
                     </div>
                     <img src={section3img17} className="w-100" alt="section3img17" />
                  </div>
               </Col>
               <Col className='position-relative section4Card02' lg={4}>
                  <div className='position-relative'>
                     <div className="position-absolute text-center text-light m-0 me-auto w-100">
                        <p className='mt-5 pt-4'>
                           Grand prize
                        </p>
                        <h2 className='m-auto col-lg-12'>
                           €5000 Switzerland adventure trip
                        </h2>
                     </div>
                     <img src={section3img18} className="w-100" alt="" />
                  </div>
               </Col>
               <Col className='position-relative section4Card03' lg={4}>
                  <div className='position-relative'>
                     <div className="position-absolute text-center text-light m-0 me-auto w-100">
                        <p className='mt-5 pt-4'>
                           Third prize
                        </p>
                        <h2 className='m-auto col-lg-12'>
                           Duncan Spine backpack
                        </h2>
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