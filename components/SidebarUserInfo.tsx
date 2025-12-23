"use client"

import { auth } from '@/firebase'
import { closeLogInModal, closeSignUpModal } from '@/redux/slices/modalSlice'
import { signOutUser } from '@/redux/slices/userSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { signOut } from 'firebase/auth'
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const SidebarUserInfo = () => {
    const user = useSelector((state: RootState) => state.user)

    const dispatch: AppDispatch = useDispatch()

    const handleSignOut = async () => {
        await signOut(auth);
        dispatch(signOutUser());
        dispatch(closeSignUpModal());
        dispatch(closeLogInModal());

    }
    return (
        <div className='absolute bottom-3 flex space-x-3 items-center justify-start
                    hover:bg-gray-500 hover:bg-opacity-10 xl:py-3 xl:px-5 rounded-full
                    cursor-pointer w-fit'
                    onClick={() => handleSignOut()}
        >
            <Image
                src={'/assets/profile-picture.png'}
                width={36}
                height={36}
                alt="Profile Picture"
                className='w-9 h-9 rounded-full' />
            <div className='hidden max-w-32 xl:flex flex-col text-sm'>
                <span className='whitespace-nowrap text-ellipsis overflow-hidden font-bold'>
                    {user.name}
                </span>
                <span className='whitespace-nowrap text-ellipsis overflow-hidden text-gray-500'>
                    @{user.username}
                </span>
            </div>
        </div>
    )
}

export default SidebarUserInfo