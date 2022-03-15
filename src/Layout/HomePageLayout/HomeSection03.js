import React from 'react'
import { Col, Container } from 'react-bootstrap'
import { HomeSection3Content } from './HomePageContent'
import ChooseOurAdvanture from '../../Components/common/ChooseOurAdvanture'
const HomeSection03 = () => {
    return (
        <div className='NowItYourTurn' id='homeSection03'>
            <Container fluid>
                <div className="NowItYourTurnMainHeading">
                    <Col lg={12}>
                        <h2>Choose <i>your adventure</i></h2>
                    </Col>

                    <div className='scrollVertically'>

                        {
                            React.Children.toArray(
                                HomeSection3Content.map((data, idx) => {
                                    return (
                                        <ChooseOurAdvanture {...data} />
                                    )
                                    
                                })
                            )
                        }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSection03