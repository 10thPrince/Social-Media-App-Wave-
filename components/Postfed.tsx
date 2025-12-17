import React from 'react'
import PostInput from './PostInput'
import Post from './Post'

function Postfed() {
  return (
    <div className='flex-grow max-w-2xl '>
        <div className='py-4 px-3 text-lg sm:text-xl sticky
        top-0 bg-white bg-opacity-80 backdrop-blur-sm font-bold'>
            Home
        </div>
        <PostInput />
        <Post />
    </div>
  )
}

export default Postfed