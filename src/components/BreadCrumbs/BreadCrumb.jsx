import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({data}) => {
  return (
    <div className='flex items-center  gap-2'>
        {data.map((item,i)=> <div className='text-black opacity-50 text-xs dark:text-white dark:opacity-100' key={i}><Link key={i}  to={`${item.link}`}>{item.title}</Link> {data.length  - i == 1 ? "":"/"} </div>)}
    </div>
  )
}

export default BreadCrumb