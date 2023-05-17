import React from "react";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import tiktok from "../assets/icons/tiktok.png";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex flex-col flex-wrap items-center justify-around gap-16 bg-candyfloss-purple py-4 text-dragon-purple lg:flex-row">
            <p className="px-8 lg:text-xl">#tunteetovatkaikille</p>
            <div className="px-8">
                <p className="pb-2 text-center">Seuraa meitä!</p>
                <div className="flex flex-row justify-center gap-4">
                    <img src={instagram} alt="instagram" className="w-10" />
                    <img src={facebook} alt="facebook" className="w-10" />
                    <img src={tiktok} alt="tiktok" className="w-10" />
                </div>
            </div>
            <ul className="px-8 text-center text-xs">
                <li>
                    <a
                        href="https://www.flaticon.com/free-icons/instagram"
                        title="instagram icons"
                        className="hover:text-happy-yellow"
                    >
                        Instagram icons created by Freepik - Flaticon
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.flaticon.com/free-icons/facebook"
                        title="facebook icons"
                        className="hover:text-happy-yellow"
                    >
                        Facebook icons created by Freepik - Flaticon
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.flaticon.com/free-icons/tiktok"
                        title="tiktok icons"
                        className="hover:text-happy-yellow"
                    >
                        Tiktok icons created by Freepik - Flaticon
                    </a>
                </li>
            </ul>
            <nav className="px-8">
                <ul className="flex flex-col justify-evenly text-center">
                    <li className="font-josefin hover:text-happy-yellow">
                        <Link to="/">Etusivulle!</Link>
                    </li>
                    <li className="font-josefin hover:text-happy-yellow">
                        <Link to="/chat">Chat</Link>
                    </li>
                    <li className="font-josefin hover:text-happy-yellow">
                        <Link to="/blog">Blogi</Link>
                    </li>
                    <li className="font-josefin hover:text-happy-yellow">
                        <Link to="/about">Meistä</Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
