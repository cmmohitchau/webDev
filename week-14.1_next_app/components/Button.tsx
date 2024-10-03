'use client'

export function Button({label} : {label : string}) {
    return(
        <>
            <button onClick={ () => {
                console.log("hello world");
                
            }} className="bg-blue-500 rounded-md">{label}</button>
        </>
    )

}