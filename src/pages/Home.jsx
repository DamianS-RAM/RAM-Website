import React from 'react'
import Navbar from '@components/navbar/Navbar'
import Hero from '@components/hero/Hero'
import Footer from '@components/footer/Footer'

const Home = () => {
  return (
    <>
        <Navbar scroll_behaviour={1}></Navbar>
        <Hero></Hero>
        <Footer></Footer>
    </>
  )
}

export default Home