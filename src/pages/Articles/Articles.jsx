import MainLayout from "../../components/MainLayout/MainLayout"
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/posts"
import ArticleCard from "../../components/ArticleCard/ArticleCard";
import { useParams } from "react-router-dom";

function Articles() {
    const searchData = useParams()?.searchData
    console.log(searchData)
    const {data,isLoading,error} = useQuery({
      queryFn:()=>{
        return getAllPosts()
      },
      queryKey:["posts"]
    })

  return (
  <MainLayout>

<div className="container">
     <section className=' flex flex-col mx-auto px-5 py-10'>
    {searchData ?   <h1 className="text-4xl text-black dark:text-white font-bold my-6 mx-2">Searching Result For "{searchData}"</h1>:  <h1 className="text-4xl text-black dark:text-white font-bold my-6 mx-2">All Articles</h1>}
      <div className='flex flex-wrap  md:gap-x-5 gap-y-5 ' >
    
      {isLoading 
  ? "loading ..." 
  : (data?.filter(item => item.title.includes(searchData?.charAt(0).toUpperCase() + searchData?.slice(1).toLowerCase() || "")) || []).map((post, i) => {
      return (
        <ArticleCard 
          key={i} 
          data={post} 
          className={"w-full md:w-[calc(50%-20px)] lg:w-[calc(33%-20px)]"} 
          to={`/article/${post?.slug}`} 
        />
      );
    })
}
     
      </div>
   

    </section>
   </div>  </MainLayout>
  )
}

export default Articles