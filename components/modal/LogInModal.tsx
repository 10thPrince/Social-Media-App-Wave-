"use client"

import React, { useState } from 'react'
import { Modal } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/redux/store'
import { closeLogInModal, openLogInModal } from '@/redux/slices/modalSlice'
import { EyeIcon, EyeSlashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const LogInModal = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);

    const isOpen = useSelector((state: RootState) => {
        return state.modals.logInModalOpen
    })

    const dispatch: AppDispatch = useDispatch()

    const handleLogIn = async() => {
        await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
    }

    const handleGuestLogIn = async( ) => {
        await signInWithEmailAndPassword(
            auth,
            "guest000@gmail.com",
            "12345678"
        )
    }


    return (
        <>
            <button className=' w-full h-12 md:h-10 md:w-20 text-md md:text-sm border-2
            border-gray-100 rounded-full text-white font-bold hover:bg-white hover:bg-opacity-25
            transition' onClick={()=> dispatch(openLogInModal())}>
                Log In
            </button>

            <Modal open={isOpen} onClose={() =>
                dispatch(closeLogInModal())}
                className='flex justify-center items-center'>
                <div className='w-full h-full bg-white
                    sm:w-[600px] sm:h-fit sm:rounded-xl'
                >
                    <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer'
                        onClick={()=> dispatch(closeLogInModal())}/>
                    <div className='pt-10 pb-20 px-4 sm:px-20'>
                        <h1 className='text-3xl font-bold mb-10'>
                            Log Into The Wave
                        </h1>

                        <div className='w-full space-y-5 mb-10'>
                            <input type="email" className='w-full h-[54px] border border-gray-200 outline-none
                            ps-3 rounded-[4px] focus:border-primary transition'
                                placeholder='Email'
                                onChange={(e)=> setEmail(e.target.value)}
                                value={email}     
                            />
                            <div className='w-full h-[54px] border border-gray-200 outline-none
                             rounded-[4px] focus-within:border-primary transition flex items-center pr-3 overflow-hidden'>
                                <input type={showPass ? "text" : "password"}
                                   placeholder='Password' className='ps-3 w-full h-full outline-none' 
                                   onChange={(e)=> setPassword(e.target.value)}
                                   value={password}
                                />
                                <div
                                    onClick={() => setShowPass(!showPass)}
                                    className='w-7 h-7 text-gray-400 cursor-pointer'>
                                    {showPass ? <EyeSlashIcon /> : <EyeIcon />}
                                </div>
                            </div>

                        </div>

                        <button
                            className='w-full bg-primary text-white h-12 rounded-full shadow-sm mb-5 '
                            onClick={()=> handleLogIn()}
                        >
                            Log In
                        </button>

                        <span className='mb-5 text-sm text-center block'>Or</span>

                        <button
                            className='w-full bg-primary text-white h-12 rounded-full shadow-sm mb-5 '
                            onClick={() => handleGuestLogIn()}
                        >
                            Log In as Guest
                        </button>
                    </div>
                </div>
            </Modal>
        </>

    )
}

export default LogInModal