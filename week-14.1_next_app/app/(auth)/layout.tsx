import React from "react"

export default function banner({children} : {
    children : React.ReactNode
}) {
    return(
        <div className="flex justify-between">
            
            <div className="justify-center">
            {children}
            </div>
            <div className="border-b text-2xl text-blue-200 font-bold text-center bg-blue-400">
                20% off for 3 days
            </div>
        </div>
    )
}