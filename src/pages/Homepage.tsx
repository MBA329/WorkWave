import React from 'react'
import Hero from '../components/Hero'
import JobListings from '../components/JobListings'
import HomeCards from '../components/HomeCards'

const Homepage = () => {
  return (
    <> <Hero title='become a better React developer' subtitle='explore other options in your code'/>
    <HomeCards/>
    <JobListings/></>
   
  )
}

export default Homepage