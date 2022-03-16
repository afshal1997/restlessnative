import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import TheVessel from './Components/Pages/TheVessel'

const Routers = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/the-vessel' element={<TheVessel />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Routers