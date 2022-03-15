import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col } from 'react-bootstrap'

const OurContest = ({ linkPage, subTitle, title, img, contestClass }) => {
  return (
    <>
      <Col className={`position-relative ${contestClass}`} lg={4}>
        <a href={linkPage ?? 'javascript:void(0)'}>
          <div className='position-relative'>
            <div className="position-absolute text-center text-light m-0 me-auto w-100">
              <p className='mt-5 pt-4'>
                {subTitle}
              </p>
              <h2 className='m-auto col-lg-12'>
                {title}
              </h2>
              <div className="linkArrow">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
            <img src={img} className="w-100" alt="section3img17" />
          </div>
        </a>
      </Col>
    </>
  )
}

export default OurContest
