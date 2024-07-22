import React, { useEffect, useState } from 'react'
import CommentForm from './CommentForm'
import { getCommentsData } from '../../Data/Comments';
import Comment from './Comment';
export default function CommentContainer({className,loginnedUserId}) {

  const [comments,setComments] = useState([])
  const mainComments = comments.filter(item=> item.parent == null)
  const replyComments = comments.filter(item=> item.parent != null)

  const [affectedComments,setAffectedComments] = useState(null)
// console.log(replyComments)

/* The `useEffect` hook in the provided code snippet is used to fetch comments data when the component
mounts for the first time. Here's a breakdown of what it does: */
  useEffect(()=>{
    (async()=>{
      const commentData  = await getCommentsData()
      setComments(commentData)
    })()
  },[])

  const addCommentHandler  = (value , id=null, replyOn = null)=>{
    const newComment =    {
      _id: "10",
      user: {
        _id: "a",
        name: "Ahmed Ewees",
      },
      desc: value,
      post: "1",
      parent: id,
      replyOnUser: replyOn,
      createdAt: "2022-12-31T17:22:05.092+0000",
    };
    setComments((cur)=>{
      return [newComment , ...cur]
    })
  }
  return (
    <div className={`${className}`}>
        <CommentForm formSubmitHandler={(text)=> addCommentHandler(text)}/>
          <div className='space-y-4 mt-8'>
            {mainComments.map((comment,i)=>{
               return <Comment key={i} comment={comment} loginnedUserId={loginnedUserId} affectedComments={affectedComments} setAffectedComments={setAffectedComments}/>
            })}
          </div>
    </div>
  )
}
