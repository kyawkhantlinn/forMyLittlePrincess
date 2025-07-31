import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const startdate = new Date("06-30-2025 19:43:00");

const getdatediff = (diff)=>{

    const day = Math.floor((diff / (1000 * 60 * 60 * 24)));

    const hournum = Math.floor((diff / (1000 * 60 * 60)));
    const hour = hournum < 24 ? hournum : hournum % 24;

    const minutenum = Math.floor((diff / (1000 * 60)));
    const minute = minutenum < 60 ? minutenum : minutenum % 60;

    const secondnum = Math.floor((diff / (1000)));
    const second = secondnum < 60 ? secondnum : secondnum % 60 ;

    return {day,hour,minute,second};
}

export default function Home(){

    const [duration,setDuration] = useState(getdatediff(new Date() - startdate));

    useEffect(()=>{
        const interval = setInterval(()=>{
            setDuration(getdatediff(new Date() - startdate));
        },1000);

        return ()=>clearInterval(interval);
    },[]);

    const navigate = useNavigate();

    // console.log(duration);

    const redirect = ()=>{
        document.querySelector(".confirms").classList.remove("hidden");
        document.querySelector(".confirms").classList.add("flex");
    }

    const confirmFailed = ()=>{
        document.querySelector(".confirms").classList.remove("flex");
        document.querySelector(".confirms").classList.add("hidden");
    }

    const playlistModal = ()=>{
        document.querySelector(".playlists").classList.remove("hidden");
        document.querySelector(".playlists").classList.add("flex");
    }

    const notnowHandler = ()=>{
        document.querySelector(".playlists").classList.remove("flex");
        document.querySelector(".playlists").classList.add("hidden");
    }

    return (
        <section className="font-heading w-full h-screen bg-rose-200 md:bg-orange-300 flex justify-center items-center relative overflow-hidden">
            <div className="flex justify-center items-center absolute z-20">
                <div className="w-11/12 md:w-[750px] bg-rose-200 md:border-4 md:border-rose-500 rounded-2xl flex flex-col md:flex-row justify-center items-center md:p-10">

                    <div className="w-full md:w-1/2 flex justify-center items-center">
                        <img src="./gifs/hug2.gif" width="250" alt="kissing2" />
                    </div>

                    <div className="w-full md:w-1/2 p-4 mt-6 md:mt-0">
                        <div className="flex justify-center items-center mt-6">
                            <button type="button" className="text-lg text-white bg-rose-500 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3" onClick={()=>navigate("/reasons")}>My Favourite things about you 💖</button>
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            <button type="button" className="text-lg text-white bg-rose-500 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3" onClick={()=>redirect()}>Psst... I Wrote You Something :3</button>
                        </div>
                        <div className="flex justify-center items-center mt-6">
                            <button type="button" className="text-lg text-white bg-rose-500 rounded-2xl cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 px-8 py-3" onClick={()=>playlistModal()}>My Heart in a Playlist 🎶</button>
                        </div>
                        <hr className="text-red-500 mt-6" />
                        <div className="w-full mt-6">
                            <p className="text-lg text-center text-rose-600 decoration-2 underline underline-offset-3">Our Journey Together</p>
                            <p className="text-lg font-bold text-center text-rose-600 px-4 md:px-0 mt-2">{duration.day} Days, {duration.hour} Hours, {duration.minute} Minutes, {duration.second} Seconds</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* confirm message */}
            <div className="hidden w-full h-screen absolute z-30 justify-center items-center confirms" style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
                <div className="w-11/12 md:w-1/4 bg-white rounded-xl flex flex-col justify-center items-center p-6">
                    <img src="./gifs/heart1.gif" width="300" />
                    <p className="text-3xl font-semibold text-center text-rose-500 my-8">Warning!!!</p>
                    <p className="text-center text-rose-500">The following content might cause your heart to skip some beats.</p>
                    <p className="text-center text-rose-500">Are you ready to continue?</p>
                    <div className="w-full flex justify-center items-center space-x-8 mt-10">
                        <button type="button" className="w-2/5 text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 py-3" onClick={()=>confirmFailed()}>No TT</button>
                        <button type="button" className="w-2/5 text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 py-3" onClick={()=>navigate("/letter")}>I'm ready</button>
                    </div>
                </div>
            </div>

            {/* playlist message */}
            <div className="hidden w-full h-screen absolute z-30 justify-center items-center playlists" style={{backgroundColor:"rgba(0,0,0,0.9)"}}>
                <div className="w-11/12 md:w-1/4 bg-white rounded-xl flex flex-col justify-center items-center p-6">
                    <img src="./gifs/vibing1.gif" width="300" />
                    <p className="text-2xl font-semibold text-center text-rose-500 my-8">I made a YouTube playlist for you.</p>
                    <p className="text-center text-rose-500">They represent the words from my heart and my love for you. Listen to these and pretend I'm right there, singing (badly) just for you.</p>
                    <div className="w-full flex justify-center items-center space-x-8 mt-10">
                        <button type="button" className="w-2/5 text-white bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 py-3" onClick={()=>notnowHandler()}>Not now</button>
                        <a href="https://youtube.com/playlist?list=PL5d5oS7IxhY3q_U7NXgix8DqXOUGIINJ1&si=VUmSjhWigznrNi8l" className="w-2/5 text-white text-center bg-rose-500 rounded-full cursor-pointer hover:-translate-y-1 hover:shadow-lg transition-all duration-100 py-3">Let's go!!</a>
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
    )
}