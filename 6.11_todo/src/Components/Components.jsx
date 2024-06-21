import { useState } from "react"

function Components ()
{
    const [todos , setTodos] = useState([{
        id : 1 ,
        title : "go to gym" , 
        description : "go to dym today"
    } , {
        id : 2 ,
        title : "go to gym" , 
        description : "go to dym today"
    } , {
        id : 3 ,
        title : "go to gym" , 
        description : "go to dym today"
    }])

    return <>
    <button > click me</button>
        <input type="text" placeholder="title" />
        <br /> <br />
        <input type="text" placeholder="description" />
    </>

}

export default Components