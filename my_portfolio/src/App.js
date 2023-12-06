import React from "react"
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

export default function App() {

  return (
    <div>
      <Home />
      <Projects />
      <Contact />
      <a href="#" className="fixed bottom-5 right-5 bg-blue-500 text-white text-sm p-2 rounded shadow-md">
        <FontAwesomeIcon icon={faArrowUp} />
      </a>
    </div>
  );
}