import React from 'react'
import { Link } from 'react-router-dom'

const Location = () => {
  return (
    <div className='location'>
      <Link to={'/home'}>Home</Link>
      <img src='/images/body/right.svg' alt='right'/>
      <Link to={'/home/hosting-for-all'}>Hosting for all</Link>
      <img src='/images/body/right.svg' alt='right'/>
      <Link to={'/home/hosting-for-all/hosting'}>Hosting</Link>
      <img src='/images/body/right.svg' alt='right'/>
      <Link to={'/home/hosting-for-all/hosting/hosting6'}>Hosting6</Link>
      <img src='/images/body/right.svg' alt='right'/>
      <Link to={'/home/hosting-for-all/hosting/hosting6/hosting5'}>Hosting5</Link>
    </div>
  )
}

export default Location