import Header from "./Header";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { ChangeEvent, useState } from "react";
import { SignupBody } from '@mohit004/my-blog';
import axios from "axios";
import  {BACKEND_URL} from '../config'


export const Auth = () => {
    const [postInputs, setPostInputs] = useState<SignupBody>({
        name: "",
        username: "",
        password: ""
    });

    const navigate = useNavigate();
    
    async function sendRequest() {
        try {
            const response =await axios.post(`${BACKEND_URL}/api/v1/user/signup` ,postInputs);
            const jwt = response.data;
            console.log(jwt);
            
            localStorage.setItem("token" , jwt);
            navigate('/blogs');

        } catch(err) {
            alert("error")
        }
    }
    return (
        <div className="h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                
                <div className="w-80">
                    <Header label="Create an account" />
                    <div className="text-center text-slate-500">
                        Already have an account?
                        <Link to={"/Signin"} className="underline pl-2">
                            Log in
                        </Link>
                    </div> 
                    <Input placeholder="Mohit" label="Name" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value
                            }));
                        }} /> 
                    
                    <Input placeholder="cmmohichau@gmail.com" label="Username" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            username: e.target.value
                        }));
                    }} />
                    
                    <Input placeholder="123456" type="password" label="Password" onChange={(e) => {
                        setPostInputs(c => ({
                            ...c,
                            password: e.target.value
                        }));
                    }} />
                     
                    <Button label="signup" onClick={sendRequest}/>
                </div>
            </div>
        </div>
    );
};

interface InputType {
    label: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    type? : string;
}


function Input({ label, placeholder, onChange , type }: InputType) {
    return (
        <div>
            <div className="font-medium text-sm p-2 text-start">
                {label}
            </div>
            <div className="flex px-2">
                <input
                    type={ type || "text"}
                    placeholder={placeholder}
                    onChange={onChange}
                    className="font-sm text-sm px-2 py-2 w-full border rounded border-slate-400"
                />
            </div>
        </div>
    );
}
