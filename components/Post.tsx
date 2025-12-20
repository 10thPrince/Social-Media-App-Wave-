import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

const Post = () => {
    return (
        <div className='border-b border-gray-100'>
            <PostHeader />

            <div className='ml-16 p-3 flex space-x-14'>
                <div className='relative'>
                    <ChatBubbleOvalLeftEllipsisIcon 
                    className='w-6 h-6 cursor-pointer hover:text-primary transition'/>
                    <span className='absolute text-xs top-1 -right-3'>
                        2
                    </span>
                </div>
                <div className='relative'>
                    <HeartIcon 
                    className='w-6 h-6 cursor-pointer hover:text-primary transition'/>
                    <span className='absolute text-xs top-1 -right-3'>
                        2
                    </span>
                </div>
                <div className='relative'>
                    <ChartBarIcon 
                    className='w-6 h-6 cursor-not-allowed '/>
                    
                </div>
                <div className='relative'>
                    <ArrowUpTrayIcon 
                    className='w-6 h-6 cursor-not-allowed'/>
                    
                </div>
            </div>
        </div>
    )
}

export const PostHeader = () => {
    return (
        <div className='flex p-3 space-x-5'>
            <Image
                src='/assets/profile-picture.png'
                width={44}
                height={44}
                alt='Profile Picture'
                className='rounded-full w-11 h-11'
            />

            <div className='text-[15px] flex flex-col space-y-2'>
                <div className='flex space-x-1.5  text-[#707E89]'>
                    <span className='text-secondary font-bold 
                    inline-block whitespace-nowrap overflow-hidden text-ellipsis
                    max-w-[60px] min-[400px]:max-w-[100px] 
                    min-[500px]:max-w-[140px] sm:max-w-[160px]'>
                        Guesttttttttttttttttt
                    </span>
                    <span className='whitespace-nowrap overflow-hidden text-ellipsis
                    inline-block max-w-[60px] min-[400px]:max-w-[100px] 
                    min-[500px]:max-w-[140px] sm:max-w-[160px]'>
                        @guest00000234
                    </span>
                    <span>&bull;</span>
                    <span>a day ago</span>
                </div>

                <span>
                    jnvfbfbvfbvibfvibvvs
                </span>
            </div>
        </div>
    )
}

export default Post