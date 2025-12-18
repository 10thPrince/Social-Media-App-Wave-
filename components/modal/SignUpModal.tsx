"use client"

import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { closeSignUpModal, openSignUpModal } from '@/redux/slices/modalSlice'
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

const SignUpModal = () => {
    const [showPass, setShowPass] = useState(false);

    const isOpen = useSelector((state: RootState) => {
        return state.modals.signUpModalOpen
    })

    const dispatch: AppDispatch = useDispatch()

    console.log(isOpen);


    return (
        <>
            <button className='text-secondary w-full h-12  bg-white md:w-20 md:h-10 text-md md:text-sm font-bold
            rounded-full' onClick={() => dispatch(openSignUpModal())}
            >
                Sign Up
            </button>

            <Modal open={isOpen} onClose={() =>
                dispatch(closeSignUpModal())}
                className='flex justify-center items-center'>
                <div className='w-full h-full bg-white
                    sm:w-[600px] sm:h-fit sm:rounded-xl'
                >
                    <form action="" className='pt-10 pb-20 px-4 sm:px-20'>
                        <h1 className='text-3xl font-bold mb-10'>
                            Create Your Account
                        </h1>

                        <div className='w-full space-y-5 mb-10'>
                            <input type="text" className='w-full h-[54px] border border-gray-200 outline-none
                            ps-3 rounded-[4px] focus:border-primary transition'
                                placeholder='Name' />
                            <input type="email" className='w-full h-[54px] border border-gray-200 outline-none
                            ps-3 rounded-[4px] focus:border-primary transition'
                                placeholder='Email' />
                            <div className='w-full h-[54px] border border-gray-200 outline-none
                             rounded-[4px] focus-within:border-primary transition flex items-center pr-3 overflow-hidden'>
                                <input type={showPass ? "text" : "password"}
                                    placeholder='Password' className='ps-3 w-full h-full outline-none' />
                                <div 
                                onClick={()=> setShowPass(!showPass)}
                                className='w-7 h-7 text-gray-400 cursor-pointer'>
                                    {showPass ? <EyeSlashIcon /> : <EyeIcon /> }
                                </div>
                            </div>

                        </div>
                    </form>
                </div>
            </Modal>
        </>

    )
}

export default SignUpModal