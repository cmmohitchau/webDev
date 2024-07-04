import { useState } from "react";
import { RecoilRoot , useRecoilState , useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/atoms/count";
function App() {

  return(
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </>
  )
}

function Count() {
  console.log("Re-render");
  return(
    <div>
      <CountRenderer />
      <Buttons />
    </div>
  )
}

function CountRenderer() {
  console.log("inside child 1");
  const count = useRecoilValue(countAtom);
  
  return(
    <div>
      <b>
        {/* {count} */}
        
      </b>
      <br />
      <EvenCountRenderer />
    </div>
  )
}

function EvenCountRenderer() {
  const isEven = useRecoilValue(evenSelector);

  return <>
  {isEven ? "It is even"  : null}
  </>
}

function Buttons() {
  console.log("inside btn component");
  const [count , setCount] = useRecoilState(countAtom);
  return (
    <>
     <button onClick={ () => setCount(count + 1)}>increment</button>
     <button onClick={ () => setCount(count - 1)}>decrement</button>
    </>
  )
 
}
export default App