import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './../Footer/Footer';
import About from './../About/About';
import Copyrights from './../Copyrights/Copyrights';

function Layout() {
  return (
    <>

    <Navbar/>
 
    <Outlet/> 

    <Footer/>
    <Copyrights/>


    </>
  )
}

export default Layout