import React from 'react'
import { useBlog } from '../hooks'
import { useParams } from 'react-router-dom';
import { FullBlogComponent } from '../components/fullBlogComponent';

export const Blog = () => {
  const {id} = useParams()
  const {blog, loading} = useBlog({id : id || ""});

  return (
    loading?
    <div>
      Loading...
    </div>
    :
    (
      <div>
        <FullBlogComponent blog={blog}/>
      </div>
    )
  )
}
