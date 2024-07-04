import React, { useContext } from 'react'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import { DarkModeContext } from '../../store';

const DarkModeToggler = () => {
    const [DarkMode, setDarkMode] = useContext(DarkModeContext);

  return (
    <div onClick={()=>setDarkMode(!DarkMode)} className='fixed bottom-3 right-16 dark:bg-gray-600  dark:bg-gray-900 bg-primary w-[60px] h-[60px] cursor-pointer  flex items-center justify-center rounded-full '>
       {DarkMode ? <MdLightMode  onClick={()=>setDarkMode(!DarkMode)}/> : <MdDarkMode onClick={()=>setDarkMode(!DarkMode)}/>}
        {/* */}
    </div>
  )
}

export default DarkModeToggler