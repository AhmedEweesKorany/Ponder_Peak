import React from 'react'
import { images } from '../../constants'
// import { FiEdit2, FiMessageSquare, FiTrash } from 'react-icons/fi'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { FiEdit2, FiTrash } from 'react-icons/fi'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { deleteComment } from '../../services/comments'

const Comment = ({comment}) => {
  const userData = useSelector(state=>state.user)
  const queryclient =  useQueryClient()
  const {mutate,isPending} = useMutation({
    mutationFn:()=>{
      return deleteComment({id:comment._id,token:userData.userInfo.token})
    },
    onSuccess:data=>{
      toast.success(data.message)
      queryclient.invalidateQueries(["comment"])
    },
    onError:data=>{
      toast.error(data.message)
    }
  })
  const handleDeleteComment = ()=>{
    mutate()
  }
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
 */}
{userData?.userInfo?.filterdData._id === comment?.user?._id && (<>
  <button className='flex gap-1 items-center text-gray-500 mt-[10px] hover:underline'>
  <FiEdit2 />
  <span>Edit</span>
</button>
<button className='flex gap-1 items-center text-gray-500 mt-[10px] hover:underline'>
  <FiTrash />
  <button disabled={isPending} onClick={handleDeleteComment}>Delete</button>
</button>
</>)}
</div>
      </div>
    </div>
  )
}

export default Comment