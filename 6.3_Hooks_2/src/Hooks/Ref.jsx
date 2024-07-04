import {useState , useCallback , useEffect , useRef} from "react";

function Ref() {
    const [incomeTax , setIncomeTax] = useState(20000);
    const divRef = useRef();

    useEffect( () => {
        setTimeout( () => {
        console.log(divRef.current);
        divRef.current.innerHTML = "10";

        } , 3000)
    } , [])

    return (
        <>
        hi there , your income tax are <div ref={divRef} >{incomeTax}</div>
        </>
    )


}

export default Ref