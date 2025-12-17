import React from 'react'

const SignUpPrompt = () => {
  return (
    <div className='h-20 fixes w-full bg-primary bottom-0 flex items-center justify-center
    md:space-x-5 lg:justify-between lg:px-20 xl:px-40 2xl:px-80'>
        <div className='hidden md:flex flex-col text-white'>
            <span className='text-xl font-bold'>
                Don't miss out the wave
            </span>
            <span>
                People on The Wave are always the first to know.
            </span>

        </div>

        <div className='flex space-x-2 w-full md:w-fit p-3'>
            <button className=' w-full h-12 md:h-10 md:w-20 text-md md:text-sm border-2
            border-gray-100 rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25
            transition'>
                Log In
            </button>

            <button className='text-secondary w-full h-12  bg-white md:w-20 md:h-10 text-md md:text-sm font-bold
            rounded-full'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUpPrompt