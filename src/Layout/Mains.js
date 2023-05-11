import React from 'react'
import Navbarr from '../components/Navbar/Navbarr'
import { Outlet } from 'react-router-dom'

function Mains() {
  return (
    <div>
      <Navbarr />
      <Outlet></Outlet>
    </div>
  )
}

export default Mains