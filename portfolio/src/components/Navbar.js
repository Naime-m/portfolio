import React from "react"

export default function Navbar() {
    return (
        <nav className="border-b-2 border-400 p-1 m-1">
            <div className="flex items-center justify-around px-4 py-2">
                <span className="text-black font-medium text-base">Medjek Naime</span>
                <ul className="flex justify-around space-x-4">
                    <li><a href="https://www.linkedin.com/in/naimemedjek/" className="text-black hover:text-blue-500">Linkedin</a></li>
                    <li><a href="https://github.com/Naime-m/" className="text-black hover:text-blue-500">Github</a></li>
                    <li><a href="#contact" className="text-white p-2 bg-black rounded-lg hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};


