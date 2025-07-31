import React, { useState } from "react";
import { useNavigate } from "react-router";
import datas from "./../assets/datas.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

export default function Reasons(){

    const navigate = useNavigate();
    const [cardindex,setCardindex] = useState(0);
    const reasons = datas.reasons;
    // console.log(reasons);

    const prevCard = ()=>{
        cardindex === 0 ? setCardindex(reasons.length - 1) : setCardindex(cardindex - 1);
    }

    const nextCard = ()=>{
        cardindex === reasons.length - 1 ? setCardindex(0) : setCardindex(cardindex + 1);
    }

    return (
        <section className="font-heading w-full h-screen bg-orange-300 flex justify-center items-center relative overflow-hidden">
            <div className="flex flex-col justify-center items-center absolute z-20">

                <div className="w-[350px] bg-rose-200 border-4 border-rose-500 rounded-2xl flex flex-col justify-center items-center p-10">
                
                    <div className="mb-15">
                        <img src={reasons[cardindex].gif} width="250" alt="reasongif" />
                        <p className="text-2xl font-bold text-center text-rose-600 my-6">{reasons[cardindex].title}</p>
                        <p className="text-center text-rose-500">{reasons[cardindex].caption}</p>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <div className="w-1/3 flex justify-center items-center">
                            <button type="button" className="font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-4 py-3.5" onClick={()=>prevCard()}><FontAwesomeIcon icon={faCaretLeft} /></button>
                        </div>
                        <p className="text-rose-400">{cardindex + 1}/{reasons.length} </p>
                        <div className="w-1/3 flex justify-center items-center">
                            <button type="button" className="font-bold text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-4 py-3.5" onClick={()=>nextCard()}><FontAwesomeIcon icon={faCaretRight} /></button>
                        </div>
                    </div>
                
                </div>

                <button type="button" className="text-lg text-white bg-rose-500 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3 mt-6" onClick={()=>navigate("/home")}>Go Back</button>

            </div>

            {/* heart-fall */}
            <div className="w-full h-screen">
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
                <div className="heart1"></div>
            </div>
        </section>
    );
}