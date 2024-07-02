import React,{useState} from "react";


function App() {
  return <>
  {/* <CardComponent innerComponnet = {<TextComponent/>}></CardComponent>
  <CardComponent innerComponnet = {<TextComponent/>}></CardComponent>
  <CardComponent innerComponnet = {<ImageComponent/>}></CardComponent> */}

    {/* real wrappere */}

    <CardComponent>hi there</CardComponent>
    <CardComponent><img src="https://images.unsplash.com/photo-1711212113408-15b60b46be80?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="an image" /></CardComponent>
  </>
}

// function TextComponent() {
//   return (
//     <>hi there</>
//   )
// }

// function ImageComponent() {
//   return(
//     <>
//     <img src="https://images.unsplash.com/photo-1711212113408-15b60b46be80?q=80&w=1034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="an image" />
//     </>
//   )
// }

function CardComponent({children}) {
return <>
<div style={{border : '2px red solid' , backgroundColor : 'lightblue' , padding : '20px' , margin : '5px'}}>{children}</div>
</>
}

export default App