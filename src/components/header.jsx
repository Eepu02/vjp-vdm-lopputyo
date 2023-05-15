import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className="bg-candyfloss-purple">
            <ul className="relative flex justify-evenly p-6 text-white lg:text-3xl">
                <li className="font-josefin hover:text-happy-yellow">
                    <Link to="/">Etusivulle!</Link>
                </li>
                <li className="font-josefin hover:text-happy-yellow">
                    <Link to="/chat">Chat</Link>
                </li>
                <li className="font-josefin hover:text-happy-yellow">
                    <Link to="/blog">Blogi</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
