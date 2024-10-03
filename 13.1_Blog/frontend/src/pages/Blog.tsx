import { useParams } from "react-router-dom"
import { useBlog } from "../hooks"
import { SkeletonFullblog } from "../components/Skeleton";
import { Fullblog } from "../components/Fullblog";
import { Appbar } from "../components/Appbar";

export function Blog() {
    const {id} = useParams();
    const {loading , blog} = useBlog({
        id : id || ""
    })

    if(loading || !blog) {
        return <SkeletonFullblog />
    }
    
    return (
        <>
            <div>
                <Appbar />
            </div>
            <Fullblog blog={blog} />
        </>
    )
}
