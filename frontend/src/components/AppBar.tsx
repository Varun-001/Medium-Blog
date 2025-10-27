import React from 'react'
import { Avatar } from './CoreComponents/Avatar'
import { Link } from 'react-router-dom'

export const AppBar = () => {
  return (
    <>
      <div className='border-b flex px-10 py-4 justify-between '>
          <Link to={'/blogs'} className='flex flex-col justify-center cursor-pointer'>
            Medium
          </Link>
          <div>
              <Link to={'/publish'}>
                <button 
                  type="button" 
                  className="mr-4 text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 "
                >
                  Publish
                </button>
              </Link>
              <Avatar size={"big"} name={"Varun"}/>
          </div>
      </div>
    </>
  )
}
