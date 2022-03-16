import React from 'react'
import { Container, Row } from 'react-bootstrap';
import { HomeSection4Content } from './HomePageContent'
import OurContest from '../../Components/common/OurContest'
const HomePageSection4 = () => {
   return (
      <div id='homeSection04'>
         <Container fluid>
            <div className="NowItYourTurnMainHeading my-5">
               <div className="col-lg-6 m-auto text-center">
                  <h2 className='text-center mt-5'>...Our<i> Contest</i></h2>
                  <h6>
                     Get a chance to win big. You are in for a treat. On every $25 pledge per month, claim a raffle ticket for a draw conducted every 90 days. This is your chance to win exciting prizes including a Grand Prize of a three-day trip to Dry Tortugas, worth $15000.
                  </h6>
               </div>
            </div>
            <Row className='mt-5 pt-5 images-in-section4'>
               {
                  React.Children.toArray(
                     HomeSection4Content.map((data) => {
                        return (
                           <OurContest {...data} />
                        )
                     }))
               }
            </Row>
         </Container>
      </div>
   )
}

export default HomePageSection4