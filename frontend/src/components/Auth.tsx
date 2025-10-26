import { Link, useNavigate } from "react-router-dom"
import { LabeledInput } from "./CoreComponents/LabeledInput"
import { useState } from "react"
import type { SignupInput } from "@varung01/medium-common";
import { Button } from "./CoreComponents/Button";
import axios from "axios"
import { BACKEND_URL } from "../config";

export const Auth = ({type} : {type:  "signin" | "signup"})=>{

    const navigate = useNavigate();
    const [signupInputs, setSignupInputs] = useState <SignupInput>({
        name: "",
        email: "",
        password: "",
    }); 

    const submit = async ()=>{
        try{
            const response =  await axios.post(`${BACKEND_URL}/user/${type==='signup'?'signup':'signin'}`,signupInputs)
            console.log(response)
            const jwt = response.data.jwtToken;
            localStorage.setItem("token",jwt);
            navigate('/blogs')
        }
        catch(e:any){
            throw new Error(`Error Signing up the user: ${e.message}`);
        }
    }

    return(
        <div className="flex flex-col justify-center h-screen ">
            <div className="flex justify-center">
                <div>
                    <div className="flex flex-col items-center p-10">

                        <div className="text-3xl font-extrabold">
                            Create an account
                        </div>

                        <div className="text-slate-400">
                            {type==='signin'? "Don't have an account": "Already have an account? " }
                            <Link to = {type==="signin"? "/signup": "/signin"} className="pl-1 underline">
                                {type==="signin"?"Signup" : "Login"}
                            </Link>
                        </div>
                        
                    </div>
                    <div className="mt-1">
                        {type==='signup'?
                            <div>
                                <LabeledInput 
                                    label={"Name"} 
                                    placeholder={"John Doe.."} 
                                    onChange={(e)=>{
                                        setSignupInputs(c=>({
                                            ...c,
                                            name: e.target.value
                                        }))
                                    }}
                                />
                            </div>
                            :
                            null
                        }

                        <div className="mt-5">
                            <LabeledInput 
                                label={"Username"} 
                                placeholder={"abc@gmail.com..."} 
                                onChange={(e)=>{
                                    setSignupInputs(c=>({
                                        ...c,
                                        email: e.target.value
                                    }))
                                }}
                            />
                        </div>

                        <div className="mt-5">
                            <LabeledInput 
                                label={"Password"} 
                                placeholder={"1234567"} 
                                onChange={(e)=>{
                                    setSignupInputs(c=>({
                                        ...c,
                                        password: e.target.value
                                    }))
                                }}
                                type = "password"
                            />
                        </div>
                    </div>

                    <div className="pt-8" >
                        <Button 
                            label={type==='signin'? "Sign in" : "Sign up"} 
                            onClick={submit}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}