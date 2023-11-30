import React from 'react'
import { Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import Home from '../home/Home'
import Build from '../build/Build'
import Footer from '../footer/Footer'

const Main = () => {
  return (
    <>
      <div className='main'>
        <div className='header-container'>
          <Header />
        </div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/Build' element={<Build />}/>
          </Routes>
      </div>
      <Footer />
    </>
  )
}

export default Main