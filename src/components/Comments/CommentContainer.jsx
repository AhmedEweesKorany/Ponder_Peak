import React, { useEffect, useState } from "react";
// import { getCommentsData } from '../../Data/Comments';
import Comment from "./Comment";
import { addNewComment, getPostComments } from "../../services/comments";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
export default function CommentContainer({ className, postId }) {
  // console.log(post?._id)
  const {
    data: comments,
    isLoading: commentIsloading,
    error: commentError,
  } = useQuery({
    queryKey: ["comment"],
    queryFn: () => {
      return getPostComments({ id: postId });
    },
  });

  const submitHandler = (e) => {
    e.preventDefault();
    mutate({ content: comment });
    setComment("");
  };

  const userData = useSelector(state=>state.user)
  // console.log("postId from form",postId)
  const [comment,setComment] = useState("")
  const queryClient = useQueryClient()

  
  const {mutate,isPending} = useMutation({
    mutationFn:({content})=>{
      return addNewComment({content,postId,token:userData?.userInfo?.token})
    },
    onSuccess: (data)=>{
      toast.success(data.message)
      // console.log(data)
      queryClient.invalidateQueries(["comment"])
    },
    onError: data =>{
      toast.error(data.message)
    }
  })

  // console.log(replyComments)

  /* The `useEffect` hook in the provided code snippet is used to fetch comments data when the component
mounts for the first time. Here's a breakdown of what it does: */

  return (
    <div className={`${className}`}>
      <form onSubmit={submitHandler}>
        <div className="flex flex-col items-end border border-primary rounded-lg p-4 mt-10">
          <textarea
            rows="5"
            className="w-full focus:outline-none dark:bg-transparent"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Leave Your Comment Here...."
          ></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md font-semibold"
          >
            Submit
          </button>
        </div>
      </form>{" "}
      <div className="space-y-4 mt-8">
        {comments?.map((comment, i) => {
          return <Comment key={i} comment={comment} />;
        })}
      </div>
    </div>
  );
}
