import { useState } from "react";

function PropDrilling() {
    const [count , setCount] = useState(0);

    return(
        <>
        <Count count={count} setCount={setCount} />
        </>
    )
}

// Here Count component is not using setCount prop but 
// to transfer to its child it is having it

function Count({count , setCount}) {
return(
    <>
    <h1>count is {count}</h1>
    <Buttons count = {count} setCount={setCount} />

    </>
)
}


function Buttons({count , setCount}) {
return(
    <>
    <button onClick={() => {
        setCount(count + 1)
    }}>Increase</button>

    <br />
    <button onClick={() => {
        setCount(count - 1)
    }}>Decrease</button>
    </>
)
}

export default PropDrilling