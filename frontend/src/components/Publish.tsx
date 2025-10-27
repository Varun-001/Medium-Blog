import React, { useState } from 'react'
import { AppBar } from './AppBar'
import { TextEditor } from './CoreComponents/TextEditor'
import type { CreateBlogInput } from '@varung01/medium-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import { Navigate, useNavigate } from 'react-router-dom'

export const Publish = () => {

    const navigate = useNavigate()
    const [postInputs,setPostInputs] = useState<CreateBlogInput>({
        title : "",
        content : ""
    })

    const onSubmit = async()=>{
        try{
            const response = await axios.post(`${BACKEND_URL}/blog`,postInputs,
            {
                headers:{
                    Authorization: localStorage.getItem('token')
                }
            })
            console.log("Response",response)
            navigate(`/blog/${response?.data?.id}`)
        }catch(e){
            console.log("error in creating the blog",e)
            throw new Error(`${e}`)
        }
    }

  return (
    <>
        <AppBar/>
        <div className='flex justify-center w-full pt-8'>
            <div className='max-w-screen-lg w-full'>
                <input 
                    type="text" 
                    className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" 
                    placeholder="Title"
                    onChange={(e)=>{
                        setPostInputs((c)=>({
                            ...c,
                            title:e.target.value
                        }))
                    }}
                />
                <TextEditor 
                    onChange={(e)=>{
                        setPostInputs((c)=>({
                            ...c,
                            content: e.target.value
                        }))
                    }}
                    onSubmit={onSubmit}
                />

            </div>
        </div>
    </>
  )
}
