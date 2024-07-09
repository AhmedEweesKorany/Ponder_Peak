import React from 'react'
import ArticleCard from '../../../components/ArticleCard/ArticleCard'

const Articles = () => {
  return (
    <section className=' mx-auto flex flex-wrap md:gap-x-5 gap-y-5 px-5 py-10'>
        <ArticleCard/>
    </section>
  )
}

export default Articles