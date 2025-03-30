import React from 'react'
import {Link} from 'react-router-dom'

const viewAll = () => {
  return (
<section className='m-auto max-w-lg my-10 px-6'>
  <Link to='/jobs' className='bg-indigo-700'>View All Jobs</Link>
</section>
  )
}

export default viewAll