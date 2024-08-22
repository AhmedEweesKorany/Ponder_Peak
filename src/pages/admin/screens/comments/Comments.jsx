import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useDataTable } from "../../../../hooks/useDataTable";
import {
  deleteComment,
  getAllComments,
  updateComment,
} from "../../../../services/comments";
import DataTable from "../../components/DataTable";
import { images } from "../../../../constants";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import ErrorMessage from "../../../../components/ErrorMessage";

const Comments = () => {
  const queryClient = useQueryClient();

  const userData = useSelector(state => state.user);
const {
    mutate: deleteDataHandler,
    isLoading: isLoadingDeleteData,
  } = useMutation({
    mutationFn: ({ id, token }) => {
      return deleteComment({ id, token });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["comments"]);
      toast.success(data.message);
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const {
    data:commentsData,isLoading,error
  } = useQuery({
    queryFn:()=>{
      return getAllComments({token:userData?.userInfo?.token})
    },
    queryKey:["comments"]
  })



  return (
   
    <div className="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8 overflow-hidden">
    <div className="inline-block min-w-full overflow-hidden rounded-lg shadow ">
      <table className="min-w-full leading-normal overflow-hidden">
        <thead>
          <tr>
            {["user","content","post","date","actions"].map((title, index) => (
              <th
                key={index}
                scope="col"
                className="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
              >
                {title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
            {commentsData?.length > 0 ? commentsData?.map((comment,i)=>{
             return    <>
               
   <tr key={i}>
   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <div className="flex items-center">
       <div className="flex-shrink-0">
         <a href="/" className="relative block">
           <img
             src={
               comment?.user?.avatar
                 ? axios.defaults.baseURL + "/uploads/" + comment?.user?.avatar
                 : images.userImage
             }
             alt={comment?.user?.name}
             className="mx-auto object-cover rounded-lg w-10 aspect-square"
           />
         </a>
       </div>
       <div className="ml-3">
         <p className="text-gray-900 whitespace-no-wrap">
           {comment?.user?.name}
         </p>
       </div>
     </div>
   </td>
   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
   
     <p className="text-gray-900 whitespace-no-wrap">{comment?.content}</p>
   </td>

   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <div className="flex items-center">
       <div className="flex-shrink-0">
         <a href="/" className="relative block">
           <img
             src={
               comment?.post?.avatar
                 ? axios.defaults.baseURL + "/uploads/" + comment?.post?.avatar
                 : images.userImage
             }
             alt={comment?.post?.title}
             className="mx-auto object-cover rounded-lg w-10 aspect-square"
           />
         </a>
       </div>
       <div className="ml-3">
         <p className="text-gray-900 whitespace-no-wrap">
           {comment?.post?.title}
         </p>
       </div>
     </div>
   </td>

   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
     <p className="text-gray-900 whitespace-no-wrap">
       {new Date(comment.createdAt).toLocaleDateString("en-US", {
         day: "2-digit",
         month: "2-digit",
         year: "2-digit",
         hour: "numeric",
         minute: "numeric",
       })}
     </p>
   </td>
   <td className="px-5 py-5 text-sm bg-white border-b border-gray-200 space-x-5">
     <button
       disabled={isLoadingDeleteData}
       type="button"
       className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
       onClick={() => {
         deleteDataHandler({
           id: comment?._id,
           token: userData.userInfo.token,
         });
       }}
     >
       Delete
     </button>
   </td>
   </tr>
    </> }) : <h1 className="text-4xl font-bold text-center">No Comments Found</h1>}
        </tbody>
      </table>
    </div>
  </div>

  );
};

export default Comments;

