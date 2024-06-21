import { useState } from 'react'


let counter = 4;
function App() {

  return (
    <>
    <WrapperComponents>
      <InnerReact></InnerReact>
    </WrapperComponents>

    <WrapperComponents>
      <InnerReact></InnerReact>
    </WrapperComponents>

    <WrapperComponents>
      <InnerReact></InnerReact>
    </WrapperComponents>
    </>
  );
}

function InnerReact() {
  const [todos , setTodos] = useState([ {
    id : 1 , 
    title : "go to gym" , 
    description : "go to gym at 4 to 5"
  } , {
    id : 2, 
    title : "go to house" , 
    description : "go to home at 4 to 5"
  } , {
    id : 3 , 
    title : "call mom" , 
    description : "call mom at 4 to 5"
  }
]);

function updateTodo() {
  setTodos([...todos , {
    id : counter++,
    title : "drink water" ,
    description : "drink water in every 1 hour"
  }] )
}
  return (<>
  <button onClick={updateTodo}>add todo</button>
  {todos.map( (todo) => ( 
    <Todo key= {todo.id} title={todo.title} description={todo.description}></Todo>
  ))}
  </>);
}

function Todo({title , description}) {
  return <>
  <h1>{title}</h1>
  <h4>{description}</h4>
  </>
}

function WrapperComponents({children}) {
  return <div style={{border : "2px solid black", padding : "10px"}}>
    {children}
  </div>

}

export default App
