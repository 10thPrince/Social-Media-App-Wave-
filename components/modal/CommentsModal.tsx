"use client"

import { closeCommentModal, openCommentModal, setCommentDeatails } from '@/redux/slices/modalSlice'
import { AppDispatch, RootState } from '@/redux/store'
import { ChatBubbleOvalLeftEllipsisIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Modal } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { PostHeader } from '../Post'
import PostInput from '../PostInput'
import { DocumentData } from 'firebase/firestore'

// interface PostProps {
//     data: DocumentData
// }

const CommentsModal = () => {
    const dispatch: AppDispatch = useDispatch();

    const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)

    const isOpen = useSelector((state: RootState) => {
        return state.modals.commentModalOpen
    })

    return (
        <>
            {/* <ChatBubbleOvalLeftEllipsisIcon
                className='w-6 h-6 cursor-pointer hover:text-primary transition'
                onClick={() => {
                    dispatch(setCommentDeatails({
                        name: data.name,
                        username: "",
                        id: "",
                        text: ""
                    }))
                    dispatch(openCommentModal())
                }}
            /> */}



            <Modal open={isOpen} onClose={() => dispatch(closeCommentModal())}
                className=' flex justify-center items-center'>
                <div className='bg-white w-full h-full sm:h-fit sm:w-[70%]
                 sm:rounded-xl outline-none relative'
                >
                    <XMarkIcon className='w-7 mt-5 ms-5 cursor-pointer'
                        onClick={() => dispatch(closeCommentModal())}
                    />

                    <div className='pt-5 pb-10 px-0 sm:px-5 flex flex-col'>
                        <PostHeader
                            name={commentDetails.name}
                            username={commentDetails.username}
                            text={commentDetails.text}
                            replyTo={commentDetails.username}
                        />
                        <div className='mt-4'>
                            <PostInput
                                insideModal={true}
                            />
                        </div>
                        <div className='absolute w-0.5 h-32 bg-gray-300 
                            left-[33px] sm:left-[53px] top-20 z-0'
                        ></div>
                    </div>
                </div>
            </Modal>
        </>
    )
}

export default CommentsModal