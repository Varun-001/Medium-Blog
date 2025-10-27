import React, { type ChangeEvent, type MouseEventHandler } from 'react'

interface TextEditorType{
    onChange: (e:ChangeEvent<HTMLTextAreaElement>)=> void
    onSubmit: MouseEventHandler
}

export const TextEditor = ({onChange,onSubmit}:TextEditorType) => {
  return (
   <div className="mt-2 w-full mb-4 ">

       <div className="flex items-center justify-between w-full border border-slate-200">
            <div className="my-2 bg-white rounded-b-lg w-full ">
                <textarea 
                    rows={8} 
                    className="block w-full  text-sm text-gray-800 bg-white pl-2 focus:outline-none" 
                    placeholder="Write an article..." 
                    required 
                    onChange={onChange}
                />
            </div>
        </div>

        <button 
            type="submit" 
            className="mt-4 inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 hover:bg-blue-800"
            onClick={onSubmit}
        >
            Publish post
        </button>
    </div>
  )
}
