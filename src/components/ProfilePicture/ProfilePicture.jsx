import React from 'react'
import { UPLOAD_FOLDER_BASE } from '../../constants'
import { HiOutlineCamera } from 'react-icons/hi'

const ProfilePicture = ({avatar}) => {
  return (
    <div className='my-10 flex items-center gap-x-4'>
        <div className='relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 outline-primary overflow-hidden'>
    <label htmlFor="profilePic" className='cursor-pointer absolute inset-0 rounded-full bg-transparent'>
        {avatar ? <img src={UPLOAD_FOLDER_BASE + avatar} alt="profile picture" className='w-full h-full object-cover' />:
            <div className='w-full h-full bg-blue-50/50 flex justify-center items-center'>
                <HiOutlineCamera className='w-7 h-auto text-primary'/>
            </div>
        }
    </label>
    <input type="file"  className='sr-only' id="profilePic" />
        </div>
        <button className='border border-red-500 rounded-lg px-4 py-2 text-red-500' type='button'>Delete</button>
    </div>
  )
}

export default ProfilePicture
