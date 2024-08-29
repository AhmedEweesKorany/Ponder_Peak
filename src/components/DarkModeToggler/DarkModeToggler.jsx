import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { DarkModeContext } from '../../Context';
import { useLocation } from 'react-router-dom';

const DarkModeToggler = () => {
    const [DarkMode, setDarkMode] = useContext(DarkModeContext);
    const location = useLocation()
    const path  = location.pathname
 return !path.startsWith("/dashboard") ?  <div onClick={()=>setDarkMode(!DarkMode)} className='fixed z-[99] bottom-3 right-7 sm:right-14 dark:bg-gray-600   bg-primary w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-full '>
   {DarkMode ? <MdLightMode  onClick={()=>setDarkMode(!DarkMode)}/> : <MdDarkMode onClick={()=>setDarkMode(!DarkMode)}/>}
    
    {/* */}
</div>: null
}

export default DarkModeToggler