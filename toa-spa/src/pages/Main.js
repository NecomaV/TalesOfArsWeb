import React from 'react'
import NavBar from '../comps/NavBar'
import Hero from '../comps/Hero'
import LongComp from '../comps/LongComp'
import Sg from '../comps/Sg'
import Char from '../comps/Char'
import BFT from '../comps/BFT'
import Footer from '../comps/Footer'



function Main() {
  return (
    <div>
        <div className=" bg-main w-full">
            <NavBar />
            <Hero />
            <LongComp />
            <Sg />
            <Char />
            <BFT />
            <Footer />
        </div>
    </div>
  )
}

export default Main