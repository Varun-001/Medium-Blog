import { BlogCard } from "../components/BlogCard"

export const Blogs = ()=>{
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="max-w-xl">
                <BlogCard
                    authorName="Varun"
                    title="How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketting"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.-Making money online is the dream of a man"
                    publishedDate="Oct 26,2025"
                />
            </div>
            <div className="flex justify-center max-w-xl">
                <BlogCard
                    authorName="Varun"
                    title="How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketting"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.-Making money online is the dream of a man"
                    publishedDate="Oct 26,2025"
                />
            </div>
            <div className="flex justify-center max-w-xl">
                <BlogCard
                    authorName="Varun"
                    title="How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketting"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.-Making money online is the dream of a man"
                    publishedDate="Oct 26,2025"
                />
            </div>
            <div className="flex justify-center max-w-xl">
                <BlogCard
                    authorName="Varun"
                    title="How an Ugly Single-Page Website Makes $5000 a month with Affiliate Marketting"
                    content="No need to create a fancy and modern website with hundreds of pages to make money online.-Making money online is the dream of a man"
                    publishedDate="Oct 26,2025"
                />
            </div>
        </div>
    )
}