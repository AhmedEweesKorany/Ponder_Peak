import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../Data/Comments';
import Comment from './Comment';
export default function CommentContainer({className,commentsData,postId}) {

  

// console.log(replyComments)

/* The `useEffect` hook in the provided code snippet is used to fetch comments data when the component
mounts for the first time. Here's a breakdown of what it does: */


  return (
    <div className={`${className}`}>
        <CommentForm  postId={postId}/>
          <div className='space-y-4 mt-8'>
            {commentsData?.map((comment,i)=>{
               return <Comment key={i} comment={comment}  />
            })}
          </div>
    </div>
  )
}
