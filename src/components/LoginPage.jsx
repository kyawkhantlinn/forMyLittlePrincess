import React, { useState } from "react";
import { useNavigate } from "react-router";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";

export default function LoginPage(){

    const [index,setIndex] = useState(0);
    const [passcode,setPasscode] = useState(["*","*","*","*","*","*"]);
    const navigate = useNavigate();

    const passcodeSetter = (value,index)=>{
        if(index <= 5){
            passcode[index] = value;
            setIndex(index + 1);
        }
        setPasscode(passcode);
    };

    // console.log(index,passcode);

    const passcodeDeleter = ()=>{
        if(index > 0 && index <= 6){
            passcode[index - 1] = "*";
            setIndex(index - 1);
        }
        setPasscode(passcode);
    };

    const redirect = ()=>{
        const loginSuccess = passcode.join("") === "010725";
        // console.log(loginSuccess);
        if(loginSuccess){
            document.querySelector(".welcomes").classList.remove("hidden");
            document.querySelector(".welcomes").classList.add("flex");
        }else{
            document.querySelector(".fails").classList.remove("hidden");
            document.querySelector(".fails").classList.add("flex");
        }
    }

    return (
        <section className="font-heading w-full h-screen bg-rose-200 md:bg-orange-300 flex justify-center items-center relative overflow-hidden">
        
            <div className="flex justify-center items-center absolute z-20">
                <div className="w-11/12 md:w-[750px] bg-rose-200 md:border-4 md:border-rose-500 rounded-2xl flex flex-col md:flex-row justify-center md:justify-around items-center md:p-10">

                    <div>
                        <img src="./images/loginpage.jpg" className="rounded-2xl loginimage" alt="loginimage" />
                    </div>

                    <div className="mt-6 md:mt-0">
                        <div className="w-[275px] font-semibold text-2xl text-center text-rose-500 border-2 border-rose-500 rounded-xl flex justify-center items-center px-8 py-2">
                            {passcode.map((code,idx)=>(<p key={idx} className="w-1/6">{code}</p>))}
                        </div>

                        <div className="w-full space-y-3 mt-8">
                            <div className="flex justify-center items-center">
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="1" onClick={(event)=>passcodeSetter(event.target.value,index)}>1</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="2" onClick={(event)=>passcodeSetter(event.target.value,index)}>2</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="3" onClick={(event)=>passcodeSetter(event.target.value,index)}>3</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="4" onClick={(event)=>passcodeSetter(event.target.value,index)}>4</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="5" onClick={(event)=>passcodeSetter(event.target.value,index)}>5</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="6" onClick={(event)=>passcodeSetter(event.target.value,index)}>6</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="7" onClick={(event)=>passcodeSetter(event.target.value,index)}>7</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="8" onClick={(event)=>passcodeSetter(event.target.value,index)}>8</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="9" onClick={(event)=>passcodeSetter(event.target.value,index)}>9</button>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <div className="w-1/3"></div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-6 py-3.5" value="0" onClick={(event)=>passcodeSetter(event.target.value,index)}>0</button>
                                </div>
                                <div className="w-1/3 flex justify-center items-center">
                                    <button type="button" className="text-2xl font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-4 py-3.5" onClick={()=>passcodeDeleter()}><FontAwesomeIcon icon={faDeleteLeft} /></button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center mt-6">
                            <button type="button" className="text-lg text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3" onClick={()=>redirect()}>Enter</button>
                        </div>
                    </div>

                </div>
            </div>

            {/* welcome message */}
            <div className="hidden w-full h-screen absolute z-30 justify-center items-center welcomes" style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
                <div className="bg-white rounded-xl p-6">
                    <img src="./gifs/hug1.gif" width="300" />
                    <p className="text-lg text-center text-rose-500 mt-8">Welcome, My Little Princess ❤❤</p>
                    <div className="flex justify-center items-center mt-6">
                        <button type="button" className="text-lg text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3" onClick={()=>navigate("/home")}>Continue</button>
                    </div>
                </div>
            </div>

            {/* login fail message */}
            <div className="hidden w-full h-screen absolute z-30 justify-center items-center fails" style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
                <div className="bg-white rounded-xl p-6">
                    <img src="./gifs/bruh1.gif" width="300" />
                    <p className="text-lg text-center text-rose-500 mt-8">Wrong passcode, Try again.</p>
                    <div className="flex justify-center items-center mt-6">
                        <button type="button" className="text-lg text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3" onClick={()=>window.location.reload()}>Retry</button>
                    </div>
                </div>
            </div>

            {/* heart-fall */}
            <div className="w-full h-screen">
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
                <div className="heart"></div>
            </div>

        </section>
    );
}