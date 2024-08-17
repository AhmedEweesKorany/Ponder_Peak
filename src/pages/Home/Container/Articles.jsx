import React from 'react'
import ArticleCard from '../../../components/ArticleCard/ArticleCard'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { randomAnimation } from '../../../services/ui/randonAnimation'

const Articles = () => {
  return (
   <div className="container">
     <section className=' flex flex-col mx-auto px-5 py-10'>
      <div className='flex flex-wrap  md:gap-x-5 gap-y-5 ' >

        <ArticleCard className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)]"} to="/article/22"/>
        <ArticleCard className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)]"} to="/article/22"/>
        <ArticleCard className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)]"} to="/article/22"/>
        <ArticleCard className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)]"} to="/article/22"/>
      </div>
      <Link to={"Articles"} className='flex items-center mx-auto gap-x-2 font-bold transition-all duration-200 hover:gap-x-5 text-primary border-2 border-primary px-6 py-3 mt-10'>
        <span data-aos = {randomAnimation()}>
          More Articles
        </span>
        <FaArrowRight className='h-3 w-3'/>
      </Link>

    </section>
   </div>
  )
}

export default Articles
