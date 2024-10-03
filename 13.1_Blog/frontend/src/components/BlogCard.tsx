import { Link } from "react-router-dom";

export interface BlogCardProps {
    authorName : string,
    title : string,
    content : string,
    id : number;
}

export const BlogCard = ({
    authorName,
    title,
    content,
    id
} : BlogCardProps) => {

    const time : number = Math.ceil(content.length / 100)

    return(
        <Link to={`/blog/${id}`}>
        <div className="border-b border-slate-500 pb-4 p-4">
            <div className="flex ">
                <div className="flex flex-col justify-center cursor-pointer">
                    <Avatar Name={authorName} size="small" /> 
                </div>
                <div className="pl-2 flex flex-col justify-center"><Circle /></div>
                <div className="font-extrathin pl-2">{authorName} </div>
                <div className="pl-2 font-thin text-slate-400">
                22 Feb 2024
                </div>
            </div>
            <div className="text-2xl font-bold pt-2">
                {title}
            </div>
            <div className="text-md font-normal">
                {content.slice(0,100) + "..."}
            </div>

            <div className="text-slate-400 text-sm font-thin pt-4">
                {time > 1 ? `${time} minutes read` : `${time} minute read`}
            </div>
        </div>
        </Link>

    )

}

function Circle() {
return <div className="h-1 w-1 rounded-full bg-slate-300">

</div>
}

export function Avatar({Name , size="small"} : {Name : string , size : "small" | "big"}) {
    return(
        <>
            <div className={`relative inline-flex items-center justify-center overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 ${size === 'small' ? "w-6 h-6" : "w-10 h-10"}`}>
                <span className="font-sm text-gray-600 dark:text-gray-300">{Name[0]}</span>
            </div>
        </>
    )
}