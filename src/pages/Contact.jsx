import React from 'react'
import Navbar from '@components/navbar/Navbar'
import Main from '@components/contact/main/Main'
import Socials from '@components/contact/socials/Socials'
import Footer from '@components/footer/Footer'

const Contact = () => {
  return (
    <>
        <Navbar></Navbar>
        <main className="content">
            <Main></Main>
            <Socials></Socials>
        </main>
        <Footer></Footer>
    </>
  )
}

export default Contact