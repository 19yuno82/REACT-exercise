import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-container'>
      <Link to='/'>idus</Link>
      <Link to='/list'>list</Link>
    </div>
  )
}

export default Header