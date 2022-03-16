import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import TheVessel from './Components/Pages/TheVessel'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/the-vessel' exact element={<TheVessel />} />
            </Routes>
        </>
    )
}

export default Routers