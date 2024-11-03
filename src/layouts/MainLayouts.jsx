import React from 'react'
import Navbar from '../Componets/Navbar'
import Footer from '../Componets/Footer'
import { Outlet } from 'react-router-dom'

export default function MainLayouts() {
  return (
    <div className=''>
    <Navbar/>
     <div className='min-h-[calc(100vh-274px)] w-10/12 mx-auto'>
        <Outlet/>
    </div>
     <Footer/>
    </div>
  )
}
