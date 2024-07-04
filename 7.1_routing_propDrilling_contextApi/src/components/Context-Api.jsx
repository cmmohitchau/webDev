import { useContext, useState } from "react";
import { CountContext } from "./context";

function PropDrilling() {
    const [count , setCount] = useState(0);

    return(
        <>
        <CountContext.Provider value = {{count , setCount}}>
        <Count />
        </CountContext.Provider>
        </>
    )
}


function Count() {
return(
    <>
    <Buttons />
    <Countrenderer />

    </>
)
}

function Countrenderer() {
    const {count} = useContext(CountContext)
    return <div>
        <h1>{count}</h1>
    </div>
}


function Buttons() {
    const {count , setCount} = useContext(CountContext)


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