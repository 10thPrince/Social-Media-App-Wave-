import { EllipsisHorizontalIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

function Widgets() {
  return (
    <div className='p-3 ps-10 hidden lg:flex flex-col 
    space-y-4 w-[400px]'>

      <div className='flex bg-[#EFF3F4] text-grayyy h-11 items-center
      space-x-3 rounded-full pl-5'>
        <MagnifyingGlassIcon
          className='w-5 h-5' />

        <input type="text"
          placeholder='Search Wave Dolphin'
          className='bg-transparent outline-none' />
      </div>

      <div className='bg-[#EFF3F4] rounded-xl p-3'>
        <h1 className='text-xl mb-2 font-bold'>
          What's Happening?
        </h1>

        <div className='flex flex-col  py-3 text-[13px] space-y-0.5'>
          <div className='flex justify-between text-grayyy2'>
            <span>Trending in Rwanda</span>
            <EllipsisHorizontalIcon
              className='w-5' />
          </div>

          <span className='font-bold text-md'>
            #ReactJS
          </span>

          <span className='text-grayyy2 text-xs'>
            240k Bumbles
          </span>
        </div>

        <div className='flex flex-col  py-3 text-[13px] space-y-0.5'>
          <div className='flex justify-between text-grayyy2'>
            <span>Trending in Rwanda</span>
            <EllipsisHorizontalIcon
              className='w-5' />
          </div>

          <span className='font-bold text-md'>
            #ReactJS
          </span>

          <span className='text-grayyy2 text-xs'>
            240k Bumbles
          </span>
        </div>

        <div className='flex flex-col  py-3 text-[13px] space-y-0.5'>
          <div className='flex justify-between text-grayyy2'>
            <span>Trending in Rwanda</span>
            <EllipsisHorizontalIcon
              className='w-5' />
          </div>

          <span className='font-bold text-md'>
            #ReactJS
          </span>

          <span className='text-grayyy2 text-xs'>
            240k Bumbles
          </span>
        </div>

        <div className='flex flex-col  py-3 text-[13px] space-y-0.5'>
          <div className='flex justify-between text-grayyy2'>
            <span>Trending in Rwanda</span>
            <EllipsisHorizontalIcon
              className='w-5' />
          </div>

          <span className='font-bold text-md'>
            #ReactJS
          </span>

          <span className='text-grayyy2 text-xs'>
            240k Bumbles
          </span>
        </div>

      </div>

      <div className='bg-[#EFF3F4] rounded-xl p-3'>
        <h1 className='text-xl mb-2 font-bold'>
          Who to Follow
        </h1>

        <div className='flex justify-between py-3'>
          <div className='flex space-x-3 items-center'>
            <Image
              src="/assets/me.jpg"
              width={56}
              height={56}
              alt='Prince Picture'
              className='h-14 w-14 rounded-full'
            />
            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Ntwari Prince</span>
              <span>@princetech</span>
            </div>
          </div>

          <button className='bg-secondary text-white w-[72px] h-[40px] rounded-full text-sm'>
            Follow
          </button>

        </div>
        <div className='flex justify-between py-3'>
          <div className='flex space-x-3 items-center'>
            <Image
              src="/assets/me.jpg"
              width={56}
              height={56}
              alt='Prince Picture'
              className='h-14 w-14 rounded-full'
            />
            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Ntwari Prince</span>
              <span>@princetech</span>
            </div>
          </div>

          <button className='bg-secondary text-white w-[72px] h-[40px] rounded-full text-sm'>
            Follow
          </button>

        </div>
        <div className='flex justify-between py-3'>
          <div className='flex space-x-3 items-center'>
            <Image
              src="/assets/me.jpg"
              width={56}
              height={56}
              alt='Prince Picture'
              className='h-14 w-14 rounded-full'
            />
            <div className='flex flex-col text-sm'>
              <span className='font-bold'>Ntwari Prince</span>
              <span>@princetech</span>
            </div>
          </div>

          <button className='bg-secondary text-white w-[72px] h-[40px] rounded-full text-sm'>
            Follow
          </button>

        </div>

      </div>

    </div>
  )
}

export default Widgets