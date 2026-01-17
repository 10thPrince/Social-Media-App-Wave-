"use client"

import { db } from '@/firebase'
import { closeCommentModal, openLogInModal } from '@/redux/slices/modalSlice'
import { RootState } from '@/redux/store'
import { CalendarIcon, ChartBarIcon, FaceSmileIcon, MapPinIcon, PhotoIcon } from '@heroicons/react/24/outline'
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import Image from 'next/image'
import { comment } from 'postcss'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface PostInputProps {
    insideModal?: boolean
}

const PostInput = ({ insideModal }: PostInputProps) => {
    const [text, setText] = useState('');
    const user = useSelector((state: RootState) => state.user)
    const commentDetails = useSelector((state: RootState) => state.modals.commentPostDetails)
    const dispatch = useDispatch();

    const handlePost = async () => {
        if(!user.username){
            dispatch(openLogInModal());
            return;
        }
        await addDoc(collection(db, "posts"), {
            text: text,
            name: user.name,
            username: user.username,
            timestamp: serverTimestamp(),
            likes: [],
            comments: []
        });

        setText('');
    }

    const sendComment = async() => {
        const postRef = doc(db, 'posts', commentDetails.id);

        await updateDoc(postRef, {
            comments: arrayUnion({
                name: user.name,
                username: user.username,
                text: text,
            })
        })
        setText('');
        dispatch(closeCommentModal())
    }



    return (
        <div className='flex flex-row space-x-5 p-3 border-b
        border-gray-100'>

            <Image
                src={insideModal ? "/assets/profile-picture.png" : "/assets/wave-sec-logo.png"}
                width={44}
                height={44}
                alt={insideModal ? 'The Profile Picture' : 'The Main Logo'}
                className={insideModal ? 'w-11 h-11 rounded-full z-10' : 'w-11 h-11'} />
            <div className='w-full'>
                <textarea name="" id=""
                    className='resize-none outline-none w-full min-h-[50px] text-lg'
                    placeholder={insideModal ? 'Send your Reply' : "What's happening"}
                    onChange={(e) => setText(e.target.value)}
                    value={text}
                >
                </textarea>


                <div className='flex flex-row justify-between pt-5 border-t border-gray-100'>
                    <div className='flex flex-row space-x-2'>
                        <PhotoIcon className='w-[22px] h-[22px] text-primary' />
                        <ChartBarIcon className='w-[22px] h-[22px] text-primary' />
                        <FaceSmileIcon className='w-[22px] h-[22px] text-primary' />
                        <CalendarIcon className='w-[22px] h-[22px] text-primary' />
                        <MapPinIcon className='w-[22px] h-[22px] text-primary' />
                    </div>
                    <button className='text-white bg-[#1E88E5] w-20 h-[36px] rounded-full text-sm cursor-pointer 
                    disabled:bg-opacity-60 disabled:cursor-not-allowed'
                        disabled={!text}
                        onClick={() => insideModal ? sendComment() : handlePost()}>
                        Bumble
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PostInput