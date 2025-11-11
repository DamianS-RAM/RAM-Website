import React from 'react'
import Navbar from '@components/navbar/Navbar'
import Policy from '@components/quality/policy/Policy'
import Main from '@components/quality/main/Main'
import Footer from '@components/footer/Footer'

const Quality = () => {
  return (
    <>
        <Navbar scroll_behaviour={1}></Navbar>
        <main>
            <Main></Main>
            <Policy></Policy>
        </main>
        <Footer></Footer>
    </>
  )
}

export default Quality