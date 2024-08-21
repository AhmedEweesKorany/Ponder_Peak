import React from 'react'
import ArticleCard from '../../../components/ArticleCard/ArticleCard'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useDispatch, useSelector } from "react-redux";
import {getAllposts} from "../../../services/posts"

const Articles = () => {
  const userData = useSelector(state=>state.user)
  const {data,isLoading,error} = useQuery({
    queryFn:()=>{
      return getAllposts({token:userData.userInfo.token})
    },
    queryKey:["posts"]
  })


  return (
   <div className="container">
     <section className=' flex flex-col mx-auto px-5 py-10'>
      <div className='flex flex-wrap  md:gap-x-5 gap-y-5 ' >
    
  {isLoading ? "loading ..." : data.posts.reverse().map((post,i)=>{
 if(i <= 3 ) return <ArticleCard data={post} className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)]"} to="#" /> 
  })}       
      </div>
      <Link to={"Articles"} className='flex items-center mx-auto gap-x-2 font-bold transition-all duration-200 hover:gap-x-5 text-primary border-2 border-primary px-6 py-3 mt-10'>
        <span >
          More Articles
        </span>
        <FaArrowRight className='h-3 w-3'/>
      </Link>

    </section>
   </div>
  )
}

export default Articles
