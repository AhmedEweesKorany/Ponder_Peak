import React from 'react'
import { Link } from 'react-router-dom'

const NavITem = ({name,path}) => {
  return (
    <li className="group relative ">
      
              <Link to={path} className="px-4 py-2">{name}</Link>
              <span className="absolute text-[20px] text-green-500 -top-1 right-0 group-hover:right-[85%] opacity-0 group-hover:opacity-100    group-hover:inline transition-all duration-500">/</span>
    </li>
  )
}

export default NavITem