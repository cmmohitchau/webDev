import { useState , useMemo } from "react";

function UseMemo() {
    const [counter , setCounter] = useState(0);
    const [inputValue , setInputValue] = useState(1);

    let count = useMemo( () => {
        console.log("memo got called");
        let finalcount = 0;

        for(let i = 1 ; i <= inputValue ; i++) {
            finalcount = finalcount+i;
        }
        return finalcount;
    } , [inputValue])
    return (
        <>
        <input onChange={function (e) {
            setInputValue(e.target.value);
        }}type="text" placeholder="sum of 1 to n" />
        
        <br /><br />
        sum from 1 to {inputValue} is {count}
        <button onClick={ () => {
            setCounter(counter + 1)
        }}>counter {counter}</button>
        </>
    )
}

export default UseMemo