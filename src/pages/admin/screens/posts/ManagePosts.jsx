import { images, stables } from "../../../../constants";
import { deletePost, getAllPosts } from "../../../../services/posts";

import { Link } from "react-router-dom";
import { useDataTable } from "../../../../hooks/useDataTable";
import DataTable from "../../components/DataTable";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import ErrorMessage from "../../../../components/ErrorMessage";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const ManagePosts = () => {
  
  const queryClient = useQueryClient();

  const userData = useSelector(state => state.user);
const {
    mutate: deletePostHandler,
    isLoading: isLoadingDeletePost,
  } = useMutation({
    mutationFn: ({ slug, token }) => {
      return deletePost({ slug, token });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries(["posts"]);
      toast.success("post deleted");
    },
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });

  const {
    data:postsData,isLoading,error
  } = useQuery({
    queryFn:()=>{
      return getAllPosts()
    },
    queryKey:["posts"]
  })

  const visibaleData = ()=>{
    if(userData.userInfo.filterdData.admin){
      if(postsData?.length > 0){
return <>
      <h1 className="text-2xl font-semibold my-5">Manage Posts</h1>
      <h2 className="text-2xl leading-tight my-5">Posts</h2>


<table className="min-w-full leading-normal">
<thead>
  <tr>
    {["image","title","body","author","date","last update","actions"].map((title, index) => (
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
    {postsData?.map((post,i)=>{
     return    <>
       
<tr key={i}>
<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
<div className="flex items-center">
<div className="flex-shrink-0">
 <a href={`/article/${post?.slug}`} className="relative block">
   <img
     src={
       post?.avatar
         ? axios.defaults.baseURL + "/uploads/" + post?.avatar
         : images.userImage
     }
     alt={post?.title}
     className="mx-auto object-cover rounded-lg w-10 aspect-square"
   />
 </a>
</div>

</div>
</td>
<td className="bg-white">

<div className="">
 <p className=" bg-white">
   {post?.title}
 </p>
</div>
</td>

<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">

<p className="text-gray-900 whitespace-no-wrap">{post?.body}</p>
</td>

<td className="px-5  py-5 text-sm bg-white border-b border-gray-200">

<p className="text-gray-900 whitespace-no-wrap">{post?.user?.name}</p>
</td>


<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
<p className="text-gray-900 whitespace-no-wrap">
{new Date(post?.createdAt).toLocaleDateString("en-US", {
 day: "2-digit",
 month: "2-digit",
 year: "2-digit",
 hour: "numeric",
 minute: "numeric",
})}
</p>
</td>

<td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
<p className="text-gray-900 whitespace-no-wrap">
{new Date(post?.updatedAt).toLocaleDateString("en-US", {
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
disabled={isLoadingDeletePost}
type="button"
className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
onClick={() => {
 deletePostHandler({
   slug: post?.slug,
   token: userData?.userInfo?.token,
 });
}}
>
Delete
</button>
<a
        href={`/dashboard/posts/manage/edit/${post?.slug}`}
        disabled={isLoadingDeletePost}
        type="button"
        className=" text-green-600 hover:text-green-900 disabled:opacity-70 disabled:cursor-not-allowed"
        >
        
        Edit
        
        </a>
</td>
</tr>
</>  })}
</tbody>
</table></>
      }else{
        return <ErrorMessage message={"you don't have any posts"}/>
      }
    }else{
      if( postsData?.filter(post => post?.user?._id === userData.userInfo.filterdData._id).length > 0 ){
        return <>
           <h1 className="text-2xl font-semibold my-5">Manage Posts</h1>
           <h2 className="text-2xl leading-tight my-5">Posts</h2>
           
        <table className="min-w-full leading-normal">
        <thead>
          <tr>
            {["image","title","body","date","last update","actions"].map((title, index) => (
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
            { postsData?.filter(post => post?.user?._id === userData.userInfo.filterdData._id)?.map((post,i)=>{
             return    <>
               
        <tr key={i}>
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <div className="flex items-center">
        <div className="flex-shrink-0">
         <a href="/" className="relative block">
           <img
             src={
               post?.avatar
                 ? axios.defaults.baseURL + "/uploads/" + post?.avatar
                 : images.userImage
             }
             alt={post?.title}
             className="mx-auto object-cover rounded-lg w-10 aspect-square"
           />
         </a>
        </div>
        
        </div>
        </td>
        <td className="bg-white">
        
        <div className="">
         <p className=" bg-white">
           {post?.title}
         </p>
        </div>
        </td>
        
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        
        <p className="text-gray-900 whitespace-no-wrap">{post?.body}</p>
        </td>
        
        
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
        {new Date(post?.createdAt).toLocaleDateString("en-US", {
         day: "2-digit",
         month: "2-digit",
         year: "2-digit",
         hour: "numeric",
         minute: "numeric",
        })}
        </p>
        </td>
        
        <td className="px-5 py-5 text-sm bg-white border-b border-gray-200">
        <p className="text-gray-900 whitespace-no-wrap">
        {new Date(post?.updatedAt).toLocaleDateString("en-US", {
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
        disabled={isLoadingDeletePost}
        type="button"
        className="text-red-600 hover:text-red-900 disabled:opacity-70 disabled:cursor-not-allowed"
        onClick={() => {
         deletePostHandler({
           slug: post?.slug,
           token: userData?.userInfo?.token,
         });
        }}
        >
        Delete
        </button>
        
        <a
        href={`/dashboard/posts/manage/edit/${post?.slug}`}
        disabled={isLoadingDeletePost}
        type="button"
        className=" text-green-600 hover:text-green-900 disabled:opacity-70 disabled:cursor-not-allowed"
        >
        
        Edit
        
        </a>
        
        </td>
        </tr>
        </>  })}
        </tbody>
        </table></>
      }else{
        return <ErrorMessage message={"you don't have any posts"}/>
      }
    }
  }



  return visibaleData();
};

export default ManagePosts;