import React from 'react'
import { Outlet } from 'react-router-dom'

import Header from  './components/header';
import Footer from  './components/footer';

export default function MainLayout() {
  return (
    <>
    <Header/>
    <div className='mainContent'>
        <Outlet/>
    </div>
    <Footer/>
    </>
  )
}
