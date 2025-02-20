import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar className="w-full z-20 top-0 start-0" />
      <div className='container  mx-auto flex-grow px-5'>
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
