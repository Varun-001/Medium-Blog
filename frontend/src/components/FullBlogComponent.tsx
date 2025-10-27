import React from 'react'
import { AppBar } from './AppBar'
import type { Blog } from '../hooks'
import { Avatar } from './CoreComponents/Avatar'

export const FullBlogComponent = ({blog}: {blog:Blog}) => {
  return (
    <>
        <AppBar/>
        <div className='flex justify-center'>
            <div className='grid grid-cols-12 w-full px-20 max-w-screen-xl' >

                <div className='col-span-8 '>
                    
                    <div className='text-5xl font-extrabold'>
                        {blog.title}
                    </div>
                    <div className='text-slate-500 pt-2'>
                        Posted on 26 October 2024
                    </div>
                    <div className='pt-4'>
                        {blog.content}
                    </div>
                </div>

                <div className='col-span-4'>
                    <div className='text-slate-500 text-lg'>
                        Author
                    </div>

                    <div className='flex mt-3 justify-evenly'>

                        <div className='flex flex-col justify-center pr-5' >
                            <Avatar name={blog.author.name} size='big'/>
                        </div>

                        <div className='flex flex-col'>

                            <div className='text-xl font-extrabold'>
                                {blog.author.name || "Anonymous"}
                            </div>
                            
                            <div className='pt-2 text-slate-500'>
                                Random catch phrase about the author's abilty to catch user's attention
                            </div>
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
  )
}
