import React from "react";
import MainLayout from "../../components/MainLayout/MainLayout";
import BreadCrumb from "../../components/BreadCrumbs/BreadCrumb";
import { images } from "../../constants";
import { Link, useParams } from "react-router-dom";
import CommentContainer from "../../components/Comments/CommentContainer";
import SocialMediaShare from "./SocialMediaShare";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getPostBySlug } from "../../services/posts";
import { getPostComments } from "../../services/comments";

const BreadCrumbData = [{
  link:"/",
  title:"Home"
},{
  title:"Article",
  link:"/Article"
},{
  title:"Article title",
  link:"/Article/1"
}]

const latestArticles = [{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},{
  img:images.post1,
  title:"  Lorem ipsum dolor sit amet consectetur adipisicing elit. A!",
  data:"jun 22,2024"
},]

const tags = ["medical","lifestyle","sport","music","cluture","food","Education"]
const ArticaleDetailPage = () => {
  const id = useParams().id
  
  const {data:post,isLoading,error} = useQuery({
    queryKey:["singlePost"],
    queryFn: ()=>{
      return getPostBySlug({slug:id})
    }
    
  })


 

  return (
    <MainLayout>
      <section className="mb-5 container mx-auto max-w-5xl px-5 lg:max-w-none  flex flex-col lg:px-28 py-5  lg:flex-row lg:gap-10 lg:justify-between lg:items-start   ">
        <div>
        <article className="flex-1">
          <BreadCrumb data={BreadCrumbData}/>
        </article>
        <img src={post?.avatar ? axios.defaults.baseURL + "/uploads/" + post?.avatar : images.post1} className="rounded-xl w-full my-5" alt="Atricle image " />
        <div className="flex gap-x-4 ">
        {post?.tags.map((tag,i)=>{
          return         <Link key={i} to={"#"} className=" text-primary flex gap-x-6 text-2xl px-1 hover:underline w-fit font-bold leading-8 tracking-widest"> {tag.toUpperCase()}</Link>

        })}
        </div>
        <h1 className=" dark:text-white text-semiblack text-3xl font-bold my-5">{post?.title}</h1>
        <p className="text-gray-600 dark:text-gray-400 tracking-wider leading-7">{post?.body}</p>

        <CommentContainer postId={post?._id}/>
        </div>

{/* leave a comment  */}


 {/* latest articles  */}
        <div className=" py-5 flex flex-col gap-8 px-5 mt-14 lg:mt-0 shadow-2xl shadow-blue-500/20 rounded-xl dark:shadow-primary/20 max-w-[700px]">
          <h1 className="text-3xl font-bold ">Latest Articles </h1>
          <div className="flex flex-row gap-5 flex-wrap ">
            {latestArticles.map((article,i)=> <div key={i} className="flex  gap-3 md:w-[300px] lg:w-[400px]">
              <img src={article.img} alt="" width={100} className="rounded-2xl object-cover" />
              <div className="px-2 ">
                <h1 className=" font-bold">{article.title}</h1>
                <p className="text-gray-500 ">{article.data}</p>
              </div>
            </div>)}
          </div>
          <div className="flex flex-wrap flex-col gap-5 py-5 capitalize">
            <h1 className="text-3xl font-bold  ">tags</h1>
            <div className="flex gap-4 flex-wrap ">
            {tags.map((tag,i)=><button key={i} className="p-4 bg-primary capitalize rounded-lg cursor-pointer text-center w-fit text-white">{tag}</button>)}  

            </div>
          </div>
        <SocialMediaShare/>
        </div>
        </section>{" "}
    </MainLayout>
  );
};

export default ArticaleDetailPage;
