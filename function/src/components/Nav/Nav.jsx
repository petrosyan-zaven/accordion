import React from 'react'
import { NavLink  } from 'react-router-dom'

function Nav() {
  return (
    <div className='Nav'>
        <NavLink to='/'>Function </NavLink>
        <NavLink to= '/class'>Class</NavLink>
    </div>
  )
}

export default Nav