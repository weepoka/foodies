import React from 'react'
import Navbar from '../NavBar/Navbar'
import HeroSection from './HeroSection'

export default function HomePage() {
  return (
    <>
        <div className='w-full h-screen'>
            <Navbar />
            <HeroSection />
        </div>
    </>
  )
}
