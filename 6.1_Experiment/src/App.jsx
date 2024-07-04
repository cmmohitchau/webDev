import React , {useState} from "react";

function App() {
const [title , setTitle] = useState("My name is mohit")

function updateTitle() {
  setTitle("My name is " + Math.random())
}
  return (
    <>
    <button onClick={updateTitle}>click me</button>
    <br /><br />
    <Header title = {title}></Header>
    <br />
    <Header title = "my name is harkirat"></Header>
    <br />
    <Header title = "my name is shyam" ></Header>
    </>
  )
}

const Header = React.memo(function Header( {title}) {
  return (
    <>{title}</>
  )
})

export default App