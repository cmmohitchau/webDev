import { Avatar } from "./BlogCard"
import { BlogProps } from "../hooks"


export const Fullblog = ({blog} : {blog : BlogProps}) => {
    return(
        <div className="pt-8 px-10 grid grid-cols-1 lg:grid-cols-3">
             
            <div className="grid col-span-1 lg:col-span-2">
                <div className="text-2xl font-bold">
                {blog.title}
                </div>
                <div className="text-thin font-extrathin text-slate-400">
                    Posted on August 24,2023
                </div>
                <div className="pt-4 font-normal">
                    {blog.content}
                </div>
            </div>

            <div className="grid lg:col-span-1">
                <div>
                    Author
                </div>
               
                <div className="mr-4 text-xl font-bold">
                    {blog.author.name}
                </div>
                <div>
                    <Avatar Name={blog.author.name} size="small" />
                </div>
                <div className=" pt-2 text-slate-500">
                    <p> Random ctach prase about the author's ability to grab the user's attention</p>
                </div>
            </div>

        </div>
    )
}