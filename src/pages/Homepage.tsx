import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import HomeCards from '../components/HomeCards'

const Homepage = () => {
  return (
    <> <Hero title='Ready to find your dream job?' subtitle='explore your various opportunities'/>
    <HomeCards/>
    <JobListings/></>
   
  )
}

export default Homepage