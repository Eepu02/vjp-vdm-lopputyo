import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="bg-candyfloss-purple">
                <ul className="relative flex justify-evenly p-6 text-white lg:text-3xl">
                    <li className="font-michroma hover:text-happy-yellow">
                        <Link to="/">Etusivulle!</Link>
                    </li>
                    <li className="font-michroma hover:text-happy-yellow">
                        <Link to="/chat">Chat</Link>
                    </li>
                    <li className="font-michroma hover:text-happy-yellow">
                        <Link to="/blog">Blogi</Link>
                    </li>
                    <li className="font-michroma hover:text-happy-yellow">
                        <Link to="/about">Meistä</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
