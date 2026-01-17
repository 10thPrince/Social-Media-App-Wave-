"use client"

import { ArrowUpTrayIcon, ChartBarIcon, ChatBubbleOvalLeftEllipsisIcon, HeartIcon } from '@heroicons/react/24/outline'
import { arrayRemove, arrayUnion, doc, DocumentData, Timestamp, updateDoc } from 'firebase/firestore'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'
import Moment from 'react-moment'
import CommentsModal from './modal/CommentsModal'
import { openCommentModal, openLogInModal, setCommentDeatails } from '@/redux/slices/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import Link from 'next/link'
import { db } from '@/firebase'
import { RootState } from '@/redux/store'



interface PostProps {
    data: DocumentData,
    id: String
}

const Post = ({ data, id }: PostProps) => {
    const dispatch = useDispatch();

    const user = useSelector((state: RootState) => state.user);

    const likePost = async () => {
        if(!user.username){
            dispatch(openLogInModal());
            return;
        }

        const postRef = doc(db, 'posts', id);

        if (data.likes.includes(user.uid)) {
            await updateDoc(postRef, {
                likes: arrayRemove(user.uid)
            })
        } else {
            await updateDoc(postRef, {
                likes: arrayUnion(user.uid)
            })
        }
    }

    return (
        <div className='border-b border-gray-100'>
            <Link href={'/' + id}>
                <PostHeader
                    username={data.username}
                    name={data.name}
                    timestamp={data.timestamp}
                    text={data.text} />

            </Link>

            <div className='ml-16 p-3 flex space-x-14'>
                <div className='relative'>

                    <ChatBubbleOvalLeftEllipsisIcon
                        onClick={() => {
                            if(!user.username){
                                dispatch(openLogInModal());
                                return;
                            }
                            dispatch(setCommentDeatails({
                                name: data.name,
                                username: data.username,
                                id: id,
                                text: data.text
                            }))
                            dispatch(openCommentModal())
                        }}
                        className='w-6 h-6 cursor-pointer hover:text-primary transition' />
                    {
                        data.comments.length > 0 &&
                        <span className='absolute text-xs top-1 -right-3'>
                            {data.comments.length}
                        </span>
                    }

                </div>
                <div className='relative'>
                    {
                        data.likes.includes(user.uid) ?
                            <HeartSolidIcon className='w-6 cursor-pointer text-pink-500 transition'
                                onClick={() => likePost()} /> :
                            <HeartIcon
                                className='w-6 h-6 cursor-pointer hover:text-pink-500 transition'
                                onClick={() => likePost()} />
                    }

                    {
                        data.likes.length > 0 &&
                        <span className='absolute text-xs top-1 -right-3'>
                            {data.likes.length}
                        </span>
                    }

                </div>
                <div className='relative'>
                    <ChartBarIcon
                        className='w-6 h-6 cursor-not-allowed ' />

                </div>
                <div className='relative'>
                    <ArrowUpTrayIcon
                        className='w-6 h-6 cursor-not-allowed' />

                </div>
            </div>
        </div>
    )
}

interface PostHeaderProps {
    username: string;
    name: string;
    timestamp?: Timestamp;
    text: string;
    replyTo?: string;
}

export const PostHeader = ({ username, name, timestamp, text, replyTo }: PostHeaderProps) => {
    return (
        <div className='flex p-3 space-x-5'>
            <Image
                src='/assets/profile-picture.png'
                width={44}
                height={44}
                alt='Profile Picture'
                className='rounded-full w-11 h-11 z-10'
            />

            <div className='text-[15px] flex flex-col space-y-2'>
                <div className='flex space-x-1.5  text-[#707E89]'>
                    <span className='text-secondary font-bold 
                    inline-block whitespace-nowrap overflow-hidden text-ellipsis
                    max-w-[60px] min-[400px]:max-w-[100px] 
                    min-[500px]:max-w-[140px] sm:max-w-[160px]'>
                        {name}
                    </span>
                    <span className='whitespace-nowrap overflow-hidden text-ellipsis
                    inline-block max-w-[60px] min-[400px]:max-w-[100px] 
                    min-[500px]:max-w-[140px] sm:max-w-[160px]'>
                        @{username}
                    </span>

                    {
                        timestamp && (
                            <>
                                <span>&bull;</span>
                                <Moment fromNow>{timestamp.toDate()}</Moment>
                            </>
                        )
                    }
                </div>

                <span>
                    {text}
                </span>

                {
                    replyTo && (
                        <span className='text-[15px] text-grayyy'>
                            Replying to <span className='text-primary'>
                                @{replyTo}
                            </span>
                        </span>
                    )
                }

            </div>
        </div>
    )
}

export default Post