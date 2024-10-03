import { Button } from "./Button"

export function Singup() {
    return(
        <>
        <div className="h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="w-80 bg-slate-400 rounded-md border">
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <Button label={"Signup"} />
                </div>

            </div>
            
        </div>
        </>
    )
}