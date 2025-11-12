import React from 'react'
import Hero from './components/Hero'
import Progress from './components/Progress'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Reviews from './components/Reviews'
import Blogs from './components/Blogs'
import Contactform from './components/Contactform'

const Home = () => {
  return (
    <div>
        <Hero />
        <Progress />
        <Services />
        <Portfolio />
        <Reviews />
        <Blogs />
        <Contactform />
    </div>
  )
}

export default Home