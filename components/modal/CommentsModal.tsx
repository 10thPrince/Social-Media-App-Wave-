"use client"

import { closeCommentModal, openCommentModal } from '@/redux/slices/modalSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post'
import PostInput from '../PostInput'

const CommentsModal = () => {
    const dispatch: AppDispatch = useDispatch();

    const isOpen = useSelector((state: RootState) => {
        return state.modals.commentModalOpen
    })

    return (
        <>
            <ChatBubbleOvalLeftEllipsisIcon
                className='w-6 h-6 cursor-pointer hover:text-primary transition' 
                onClick={() => dispatch(openCommentModal())}
            />



            <Modal open={isOpen} onClose={() => dispatch(closeCommentModal())}
                className=' flex justify-center items-center'>
                <div className='bg-white w-full h-full sm:h-fit sm:w-[70%] sm:rounded-xl outline-none'>
                    <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer'
                        onClick={()=> dispatch(closeCommentModal())}
                    />

                    <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col'>
                        <PostHeader 
                            name='Guest'
                            username='guest123'
                            text='helloooooo'
                        />
                        <PostInput />
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default CommentsModal