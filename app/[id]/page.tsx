import Postfed from '@/components/Postfed'
import PostInput from '@/components/PostInput'
import Sidebar from '@/components/Sidebar'
import SignUpPrompt from '@/components/SignUpPrompt'
import Widgets from '@/components/Widgets'
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const page = () => {
    return (
        <>

            <div className='text-[#0F1419] min-h-screen max-w-[1400px] 
        mx-auto flex flex-row justify-center'>
                <Sidebar />
                <div className='flex-grow max-w-2xl border-x border-gray-100'>
                    <div className='py-4 px-3 text-lg sm:text-xl sticky
                        top-0 bg-white bg-opacity-80 backdrop-blur-sm font-bold
                        border-b border-gray-100 flex items-center'
                        >
                            <Link href="/">
                                <ArrowLeftCircleIcon className='w-10 h-10 mr-10' />
                            </Link>
                            Bumble
                    </div>


                </div>
                <Widgets />
            </div>
            <SignUpPrompt />
        </>

    )
}

export default page