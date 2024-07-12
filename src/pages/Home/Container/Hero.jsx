import React, { useState } from "react";
import { images } from "../../../constants";
import { BiSearch } from "react-icons/bi";

const Hero = () => {
  const [value,setVaalue] = useState("")
  const valueHandler = (e)=>{
    setVaalue(e.target.value)
  }
  return (
    <section className="flex justify-center lg:justify-between flex-col sm:flex-row px-10 sm:px-0">
      <div className="flex flex-col gap-4 text-center py-32">
        <h1 className="text-3xl sm:text-4xl text-gray-800 dark:text-white font-bold">Read The Most interesting Articles</h1>
        <p className="text-gray-500 font-bold  w-[300px] mx-auto dark:text-gray-500  sm:w-[500px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sint ab harum reiciendis, itaque possimus, fugiat.
        </p>

        <div className="shadow-md  flex gap-6 p-2 relative rounded-lg dark:bg-gray-800">
            <div className=" w-[80%] group">
              {value === "" ?              <BiSearch className="text-gray-400 absolute bottom-0 top-6 left-5  group-focus:px-3"/>
:""}
            <input type="text" onChange={(e)=>valueHandler(e)} name="" id="" placeholder="    Search Article" className=" rounded-md p-3 w-full focus:border-none focus:outline-none dark:shadow-inner dark:bg-gray-800" />
            </div>
        <button onClick={()=>{
          alert("محمد ومحمود انا هزمتهم")
        }} className="bg-primary px-3  rounded-lg text-white w-[130px]">Search</button>
        </div>
        <div className="flex gap-4 mt-4 items-center flex-col sm:flex-row">
            <span className="italic">Popular Tags:</span>
            <ul className="flex gap-4 italic flex-wrap  justify-center">
                <li className="bg-green-100 font-bold rounded-md dark:text-white dark:bg-gray-800 p-2 text-primary ">Design</li>
                <li className="bg-green-100 font-bold rounded-md dark:text-white dark:bg-gray-800 p-2 text-primary">Programming</li>
                <li className="bg-green-100 font-bold rounded-md dark:text-white dark:bg-gray-800 p-2 text-primary">Cloud Computing</li>
            </ul>
        </div>
      </div>
      <div className="hidden sm:block">

        <img src={images.HeroImage} alt="image that describe users reading articles" className="w-[900px] object-cover dark:bg-gray-900 hidden lg:block" />
      </div>
    </section>
  );
};

export default Hero;
