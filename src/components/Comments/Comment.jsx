import React from 'react'
import { images } from '../../constants'
// import { FiEdit2, FiMessageSquare, FiTrash } from 'react-icons/fi'
import axios from 'axios'

const Comment = ({comment}) => {

  return (
    <div className='flex gap-x-3 bg-[#f2f4f5] p-3 rounded-lg dark:bg-transparent dark:border dark:border-gray-600'>

      <img src={comment?.user?.avatar ? axios.defaults.baseURL + "/uploads/" + comment?.user?.avatar : images.postProfile1} alt="user Profile " className='w-9 h-9 object-cover rounded-full' />
      <div className='flex flex-col flex-1'>
<h5 className='font-bold text-xs text-semiblack dark:text-white dark:font-bold'>
  {comment.user.name}
</h5>
<span className='text-xs text-gray-500'>
  {new Date(comment.createdAt).toLocaleDateString("en-US",{
    day:"numeric", 
    month:"short",
    hour:"numeric",
    minute:"numeric"
  })}
</span>
<p className='font-opensans mt-[10px] text-gray-500'>{comment.content}</p>
<div className='flex gap-x-5 '>
{/* {isUserLoggedIn && (<>
<button className='flex gap-1 items-center text-gray-500 mt-[10px] hover:underline'>
  <FiMessageSquare />
  <span>reply</span>
</button>
</>)}
{commentEdit && (<>
  <button className='flex gap-1 items-center text-gray-500 mt-[10px] hover:underline'>
  <FiEdit2 />
  <span>reply</span>
</button>
<button className='flex gap-1 items-center text-gray-500 mt-[10px] hover:underline'>
  <FiTrash />
  <span>reply</span>
</button>
</>)} */}
</div>
      </div>
    </div>
  )
}

export default Comment