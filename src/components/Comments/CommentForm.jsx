import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import addNewComment from "../../services/comments/addNewComment";
import { useSelector } from "react-redux";

function CommentForm({postId}) {
  const submitHandler = (e) => {
    e.preventDefault();
    mutate({content:comment})
    setComment("")
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
  return (
    <form
      onSubmit={submitHandler}
    >
      <div className="flex flex-col items-end border border-primary rounded-lg p-4 mt-10">
        <textarea  rows="5" className="w-full focus:outline-none dark:bg-transparent" value={comment} onChange={e=>setComment(e.target.value)} placeholder="Leave Your Comment Here...."></textarea>
        <button type="submit" className="bg-primary text-white px-6 py-3 rounded-md font-semibold">
          Submit
        </button>
      </div>
    </form>
  );
}

export default CommentForm;
