import { Appbar } from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks"
import { Skeleton } from '@mui/material';

export function Blogs() {
    const {loading , blogs} = useBlogs();

    if(loading) {
       return  (Array.from(new Array(2)).map((_, index) => (
        <div key={index} style={{ marginBottom: '16px' }}>
          <Skeleton variant="rectangular" height={200} />
          <Skeleton width="60%" />
          <Skeleton width="40%" />
        </div>
      ))
    )
    }

   
    return(
        <div>
            <div>
                <Appbar />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <div>
                  {blogs.map((blog , id)=> (
                    <BlogCard key={id}
                    id={blog.id}
                    title={blog.title}
                    content={blog.content}
                    authorName={blog.author.name}
                     />
                  ))}
                </div>
            </div>
        </div>
    )

}