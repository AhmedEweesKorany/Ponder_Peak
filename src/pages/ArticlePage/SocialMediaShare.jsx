import React from 'react'
import { FaFacebookSquare, FaRedditSquare, FaTwitterSquare, FaWhatsappSquare } from 'react-icons/fa'

const SocialMediaShare = ({url,title}) => {
  return (
    <div className='flex gap-x-4 items-center '><h2 className='font-roboto font-medium'>Social Media  : </h2>
        <ul className='flex gap-x-2'>
            <li>
                <a href={`https://www.facebook.com/dialog/share?app_id=399145079869393&display=popup&href=${url}`} target='_blank' rel='noreferrer'>
                <FaFacebookSquare className='text-[#3b5998] w-12 h-auto '/>
                </a></li>
            <li>
            <a href={`https://twitter.com/intent/tweet?url=${url}`} target='_blank' rel='noreferrer'>
            <FaTwitterSquare className='text-[#00acee] w-12 h-auto'/>
                </a></li>
            <li>
            <a href={`https://www.reddit.com/submit?url=${url}&title=${title}`} target='_blank' rel='noreferrer'>
            <FaRedditSquare className='text-[#ff4500] w-12 h-auto'/>
                </a></li>
            <li>
            <a href={`https://api.whatsapp.com/send/?text=${url}`} target='_blank' rel='noreferrer'>
                <FaWhatsappSquare className='text-[#25d366] w-12 h-auto'/>
                </a></li>
        </ul>
    </div>
  )
}

export default SocialMediaShare