import React, {useState} from "react";

function Keys() {
    const [todos , setTodos] = useState([
        {
            id : 1,
            title : "go to gym",
            description : "go to gym today"
        },
        {
            id : 2,
            title : "learn dsa",
            description : "learn dsa in the morning"
        },
        {
            id : 3,
            title : "learn web dev",
            description : "learn web dev in the evening"
        }
    ])

    function addTodo() {
        setTodos([...todos , {
            id : 4,
            title : "learn python",
            description : "learn python in the night"
        }])
    }
    return (
        <>
        <button onClick={addTodo}>Add a todo</button>
       {todos.map(todo => <Todo title = {todo.title} description = {todo.description} key = {todo.id}></Todo>)}
        </>
    )
} 

function Todo({title , description}) {
return <>
<h1>{title}</h1>
<h4>{description}</h4>
</>
}

export default Keys