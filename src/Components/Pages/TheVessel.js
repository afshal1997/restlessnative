import React from 'react'
import TheVesselMainSection from '../../Layout/TheVesselPageLayout/TheVesselMainSection'
import '../../Layout/TheVesselPageLayout/thevesselcss.css'
import TheVesselSection02 from '../../Layout/TheVesselPageLayout/TheVesselSection02'
import TheVesselSection03 from '../../Layout/TheVesselPageLayout/TheVesselSection03'
import TheVesselSection04 from '../../Layout/TheVesselPageLayout/TheVesselSection04'
import Header from '../common/Header'
import Footer from '../common/Footer'

const TheVessel = () => {
  return (
    <>
      <Header />
      <TheVesselMainSection />
      <TheVesselSection02 />
      <TheVesselSection03 />
      <TheVesselSection04 />
      <Footer />
    </>
  )
}

export default TheVessel