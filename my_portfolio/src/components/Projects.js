import React from "react"
import Contact from "./Contact";

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-center mt-40 m-30" id="projects">
            <ul className="flex flex-col gap-4 items-center justify-center mb-40">
                <li className="w-1/2 overflow-auto bg-blue-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/Api-django">API - Django</a><p className="text-sm h-16 px-2"> Création d'une API avec Django Rest pour gérer des produits, mettre en place un système d'authentification et permettre la gestion des utilisateurs avec différentes autorisations</p></li>
                <li className="w-1/2 overflow-auto bg-yellow-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/docker-django">Docker - API Django</a><p className="text-sm h-16 px-2">Conteneurisation d'une API réalisée avec Django Rest Framework et une base de données en utilisant Docker</p></li>
                <li className="w-1/2 overflow-auto bg-red-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/MyIRC">My IRC</a><p className="text-sm h-16 px-2">Développer en groupe une application de chat avec TypeScript, ExpressJS et Socket.io
                </p></li>
                <li className="w-1/2 overflow-auto bg-green-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/MyWordle">My Wordle</a><p className="text-sm h-16 px-2">Créer une copie du jeu Wordle en TypeScript et Node JS</p></li>
                <li className="w-1/2 overflow-auto bg-blue-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/BugTracker">BugTracker</a><p className="text-sm h-16 px-2">Développer un tracker de bugs
                    Création d'un Tracker de bugs avec ASP.NET Razor Pages</p></li>
                <li className="w-1/2 overflow-auto bg-yellow-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/WardrobeAPI">My Wardrobe</a><p className="text-sm h-16 px-2">Mise en place d'une garde robe en ligne
                    Implémentation d'une API avec ASP.NET Web API pour le back-end
                    Utilisation d'Angular et Tailwind CSS pour le front-end
                </p></li>
                <li className="w-1/2 overflow-auto bg-red-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/LittleKitchenAPI">Little Kitchen</a><p className="text-sm h-16 px-2">Développer un manuel de cuisine interactif
                    Conception d'une API avec ASP.NET Web API pour le back-end
                    Utilisation d'Angular et Bootstrap pour le front-end</p></li>
                <li className="w-1/2 overflow-auto bg-green-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/MyLibrary">My Library</a><p className="text-sm h-16 px-2">Créer une librairie en ligne avec ASP.NET MVC
                </p></li>
                <li className="w-1/2 overflow-auto bg-blue-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/FoodWatcherAPI">FoodWatcher</a><p className="text-sm h-16 px-2">Implémenter une API en ASP.NET pour tracker ses courses et minimiser le gaspillage alimentaire</p></li>
                <li className="w-1/2 overflow-auto bg-yellow-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/Travel-Journal">Travel Journal</a><p className="text-sm h-16 px-2">Créer un journal de voyage en React</p></li>
                <li className="w-1/2 overflow-auto bg-red-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/BileMo-API">BileMo</a><p className="text-sm h-16 px-2">Créer une API REST pour un fournisseur téléphonique
                    Implémentation d'une API avec API Platform sous Symfony</p></li>
                <li className="w-1/2 overflow-auto bg-green-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/Snowtricks" >Snowtricks</a><p className="text-sm h-16 px-2">Réaliser un site communautaire de snowboard
                    Utilisation de Symfony pour le back-end et Bootstrap pour le front-end</p></li>
                <li className="w-1/2 overflow-auto bg-blue-200 rounded-lg flex flex-col items-center justify-center mb-4 p-4 text-black transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/ToDo-Co">ToDo and Co</a><p className="text-sm h-16 px-2">Améliorer une application To-do
                    Corrections d'anomalies, gestion des rôles et tâches,
                    Audit de qualité du code & performance de l'application avec Blackfire
                    Mise en place de tests unitiaires et fonctionnels
                </p></li>
                <li className="w-1/2 overflow-auto bg-yellow-200 rounded-lg flex flex-col items-center justify-center m-4 p-4 transition duration-600 transform hover:scale-110"><a className="font-bold mb-2 hover:text-blue-500" href="https://github.com/Naime-m/ExpressFood">ExpressFood</a><p className="text-sm h-16 px-2">Réaliser la base de données et les diagrammes UML d'une application de livraison de repas
                </p></li>
            </ul>
            <Contact />
        </div>
    );
};


