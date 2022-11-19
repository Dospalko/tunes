import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const TheNavigation = (props: Props) => {
    const activeStyle = {
        textDecoration: "underline",
      };
      const activeClassName = "underline";
  return (

        <nav className='flex gap-7 font-semibold'>
           <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : undefined
            }
          >
            Tasks
          </NavLink>
            <NavLink to='/tunes' >
                Tunes
            </NavLink>
            <NavLink to='/about'>
                About
            </NavLink>
        </nav>
    
  )
}

export default TheNavigation