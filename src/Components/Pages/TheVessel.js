import React from 'react'
import TheVesselMainSection from '../../Layout/TheVesselPageLayout/TheVesselMainSection'
import '../../Layout/TheVesselPageLayout/thevesselcss.css'
import TheVesselSection02 from '../../Layout/TheVesselPageLayout/TheVesselSection02'
import TheVesselSection03 from '../../Layout/TheVesselPageLayout/TheVesselSection03'
import TheVesselSection04 from '../../Layout/TheVesselPageLayout/TheVesselSection04'

const TheVessel = () => {
  return (
    <>
        <TheVesselMainSection />
        <TheVesselSection02 />
        <TheVesselSection03 />
        <TheVesselSection04 />
    </>
  )
}

export default TheVessel