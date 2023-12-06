import React from "react"

export default function Contact() {
    return (
        <div id="contact" className="p-12 flex flex-col items-center m-60 pb-20 border border-black rounded-lg">
            <h2 className="mt-16 text-4xl">Me contacter :</h2>
            <h2 className="mt-5 text-xl font-bold hover:text-blue-500 animate-pulse"><a href="mailto:naimemedjek@gmail.com">naimemedjek@gmail.com</a></h2>
        </div>
    );
};