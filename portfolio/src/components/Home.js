import React from "react"
import Navbar from "./Navbar";
import logo from "../images/logo.png"

export default function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex flex-col items-center h-screen">
                <img src={logo} alt="logo" className="rounded-full w-32 h-32 mt-20 transition duration-600 transform hover:scale-150" />
                <div className="flex flex-col items-center">
                    <h2 className="mt-16 text-2x1 ">Bonjour, je suis Naime</h2>
                    <h2 className="mt-5 text-xl font-bold">Développeur Fullstack passionné</h2>
                    <button className="mt-10 text-xl font-bold text-white p-2 bg-black rounded-lg hover:text-blue-500 p-5 transition-transform hover:scale-110 animate-bounce"><a href="#projects">Mes projets</a></button>
                </div>
            </div>
        </div >
    );
};