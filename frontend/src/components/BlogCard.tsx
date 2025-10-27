import React from 'react'
import { Avatar } from './CoreComponents/Avatar'
import { Link } from 'react-router-dom'

interface BlogCardProps{
    id:string,
    authorName: string,
    title: string,
    content: string,
    publishedDate: string
}

export const BlogCard = ({
        authorName,
        title,
        content,
        publishedDate,
        id
    }:BlogCardProps) => {

    return (
        <Link to={`/blog/${id}`}>
            <div className='border-b p-4 border-slate-200 w-screen max-w-screen-md cursor-pointer'>

                <div className='flex'>
                    <div className=''>
                        <Avatar name={authorName}/> 
                    </div>
                <div className='flex flex-col justify-center font-extralight pl-2 text-sm'>
                        {authorName}
                    </div> 
                <div className='flex flex-col justify-center pl-2'>
                        <Circle/>
                    </div> 
                    <div className='flex flex-col justify-center font-thin pl-2 text-slate-500 text-sm'>
                        {publishedDate}
                </div>
                </div>

                <div>
                    <div className='text-xl font-semibold pt-2'>
                        {title}
                    </div>
                    <div className='text-md font-thin'>
                        {content.length>100 ? content.slice(0,100) + "..." : content }
                    </div>
                </div>

                <div className='text-slate-500 text-sm font-thin pt-2'>
                {`${Math.ceil(content.length /100)} mintue(s)`} 
                </div>

            </div>
        </Link>
    )
}




export function Circle(){
    return(
        <div className='h-2 w-2 rounded-full bg-slate-500 '>

        </div>
    )
}