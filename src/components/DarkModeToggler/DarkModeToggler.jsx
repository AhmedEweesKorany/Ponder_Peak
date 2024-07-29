import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { DarkModeContext } from '../../Context';

const DarkModeToggler = () => {
    const [DarkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div onClick={()=>setDarkMode(!DarkMode)} className='fixed z-[99] bottom-3 right-7 sm:right-14 dark:bg-gray-600   bg-primary w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-full '>
       {DarkMode ? <MdLightMode  onClick={()=>setDarkMode(!DarkMode)}/> : <MdDarkMode onClick={()=>setDarkMode(!DarkMode)}/>}
        
        {/* */}
    </div>
  )
}

export default DarkModeToggler