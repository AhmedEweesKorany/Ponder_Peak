import React from 'react'
import CommentForm from './CommentForm'

export default function CommentContainer({className}) {
  return (
    <div className={`${className}`}>
        <CommentForm/>
    </div>
  )
}
