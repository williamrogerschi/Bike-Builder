import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../header/Header'
import Home from '../home/Home'
import Build from '../build/Build'

const Main = () => {
  return (
    <div>
        <Header />
        <Home />
        <Build />
    </div>
  )
}

export default Main