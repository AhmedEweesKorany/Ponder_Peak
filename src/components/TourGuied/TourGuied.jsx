import React from 'react'

const TourGuied = ({driverObj}) => {
  return (
    <div onClick={()=>{
        driverObj.drive()
    }} className='fixed z-50 bottom-5 p-5 rounded-lg text-white cursor-pointer left-5 bg-green-400 hover:bg-green-600 transition-all dark:bg-gray-600'>
        <h1>Take a Tour</h1>
    </div>
  )
}

export default TourGuied