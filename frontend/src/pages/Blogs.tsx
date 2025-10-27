import { AppBar } from "../components/AppBar"
import { BlogCard } from "../components/BlogCard"
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks"

export const Blogs = ()=>{

    const {loading,blogs} = useBlogs();   

    return(
        loading?
        (<>
            <AppBar/> 
            <div className="flex flex-col justify-center items-center">
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
                <BlogSkeleton/>
            </div>
        </>)
        :
        <div>
            <AppBar/>

            <div className="flex flex-col items-center justify-center">
                    <div>
                        {blogs.map(blog=>
                            <BlogCard
                                id={blog?.id}
                                authorName= {blog?.author?.name}
                                title={blog?.title}
                                content={blog?.content}
                                publishedDate="Oct 26,2025"
                            />
                        )}
                    </div>
            </div>
        </div>
    )
}