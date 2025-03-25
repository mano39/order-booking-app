import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../page/Home'
import Offers from '../page/Offers'

function Navigation() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/offers" element={<Offers />} />
      <Route path="/offers" element={<Offers />} />
    </Routes>
  )
}

export default Navigation
