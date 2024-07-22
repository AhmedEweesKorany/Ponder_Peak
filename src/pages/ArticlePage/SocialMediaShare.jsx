import React from 'react'
import { FaFacebookSquare, FaRedditSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'

const SocialMediaShare = () => {
  return (
    <div className='flex gap-x-4 items-center '><h2 className='font-roboto font-medium'>Social Media  : </h2>
        <ul className='flex gap-x-2'>
            <li><a href="#">
                <FaFacebookSquare className='text-[#3b5998] w-12 h-auto '/>
                </a></li>
            <li><a href="#">
                <FaTwitterSquare className='text-[#00acee] w-12 h-auto'/>
                </a></li>
            <li><a href="#">
                <FaRedditSquare className='text-[#ff4500] w-12 h-auto'/>
                </a></li>
            <li><a href="#">
                <FaWhatsappSquare className='text-[#25d366] w-12 h-auto'/>
                </a></li>
        </ul>
    </div>
  )
}

export default SocialMediaShare