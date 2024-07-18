import React from 'react'
import { images } from "../../constants";
import { BiHeart } from 'react-icons/bi';

const Footer = () => {
  return (
 <section className='bg-semiblack py-10 dark:bg-transparent relative'>
  <div className='absolute hidden dark:block w-full top-0 h-[1px] bg-gray-400 '></div>
     <div className=" text-white  container  flex flex-col sm:flex-row justify-between items-center">

<div className="grid grid-cols-2 place-items-center sm:place-items-start  lg:grid-cols-4 lg:w-full  gap-20 sm:order-last w-96 ">
  <div>
    <ul className="flex flex-col gap-4 capitalize">
      <li>Products</li>
      <li>LandingPage</li>
      <li>features</li>
      <li>documentation</li>
      <li>program</li>
      <li>pricing</li>
    </ul>
  </div>
  <div>
    <ul className="flex flex-col gap-4 capitalize">
      <li>Design</li>
      <li>LandingPage</li>
      <li>ui ktia</li>
      <li>documentation</li>
      <li>program</li>
      <li>Themes</li>
    </ul>
  </div>
  <div>
    <ul className="flex flex-col gap-4 capitalize">
      <li>comapny</li>
      <li>about</li>
      <li>terms</li>
      <li>plivacy policy</li>
      <li>careers</li>
    </ul>
  </div><div>
    <ul className="flex flex-col gap-4 capitalize">
      <li>more</li>
      <li>documantation</li>
      <li>license</li>
      <li>changogin</li>
    </ul>
  </div>
</div>
<div className='flex flex-col items-center px-5 gap-10 mt-10'>
  <div className="flex flex-col items-center">
    <img src={images.logo} width={40} height={40} alt="" />
    <p className='text-center mt-2 text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
  </div>
</div>
</div>
<div className="mt-10">
    <div className='p-3 bg-primary w-fit rounded-full mx-auto text-white'>
    <BiHeart />

    </div>
    <p className='mt-4 text-center text-white'>All rights reversed @ Ahmed Ewees</p>
  </div>
 </section>
  )
}

export default Footer
