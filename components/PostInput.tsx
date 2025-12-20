import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const PostInput = () => {
    return (
        <div className='flex flex-row space-x-5 p-3 border-b
        border-gray-100'>
            <Image 
                src="/assets/wave-sec-logo.png" 
                width={44}
                height={44} 
                alt='The Main Logo'
                className='w-11 h-11' />
            <div className='w-full'>
                <textarea name="" id=""
                    className='resize-none outline-none w-full min-h-[50px] text-lg'
                    placeholder="What's happening"></textarea>
                <div className='flex flex-row justify-between pt-5 border-t border-gray-100'>
                    <div className='flex flex-row space-x-2'>
                        <PhotoIcon className='w-[22px] h-[22px] text-primary' />
                        <ChartBarIcon className='w-[22px] h-[22px] text-primary' />
                        <FaceSmileIcon className='w-[22px] h-[22px] text-primary' />
                        <CalendarIcon className='w-[22px] h-[22px] text-primary' />
                        <MapPinIcon className='w-[22px] h-[22px] text-primary' />
                    </div>
                    <button className='text-white bg-[#1E88E5] w-20 h-[36px] rounded-full text-sm cursor-pointer'>
                        Bumble
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostInput