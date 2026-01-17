"use client"

import React from 'react'
import SignUpModal from './modal/SignUpModal'
import LogInModal from './modal/LogInModal'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'

const SignUpPrompt = () => {
    const name = useSelector((state: RootState)=> state.user.name)

    console.log(name)

  return (
    !name &&
    <div className='h-20 fixed w-full bg-primary z-50 bottom-0 flex items-center justify-center
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
            <LogInModal />

            <SignUpModal />
        </div>
    </div>
  )
}

export default SignUpPrompt