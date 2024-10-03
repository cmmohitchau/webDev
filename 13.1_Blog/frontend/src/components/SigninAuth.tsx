import Header from "./Header";
import Button from "./Button";
import { Link , useNavigate } from "react-router-dom";
import React,{ ChangeEvent, useState } from "react";
import { SigninBody } from '@mohit004/my-blog';
import axios from "axios";
import { BACKEND_URL } from "../config";


export const Auth = () => {
    const [postInputs, setPostInputs] = useState<SigninBody>({
        username: "",
        password: ""
    }); 
    const navigate = useNavigate()

    async function sendRequest() {
        const response = await axios.post(`${BACKEND_URL}/api/v1/user/signin` , postInputs);
        const jwt = response.data;
        localStorage.setItem('token',jwt);
        navigate('/blogs')
        
    }
    
    return (
        <div className="h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="w-80">
                    <Header label="Create an account" />
                    <div className="text-center text-slate-500">
                       Don't have an account?
                       
                        <Link to={"/Signup"} className="underline pl-2">
                            Signup
                        </Link>
                    </div> 
                    <Input placeholder="cmmohichau@gmail.com" label="Username" 
                    onChange={(e) => {
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
                    
                    <Button label="signin" onClick={sendRequest}  />
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

const Input = React.memo(function ({ label, placeholder, onChange , type }: InputType) {
    

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
})
