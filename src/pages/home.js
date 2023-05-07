import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header.js";
import Man from "../assets/photos/man.png";

const Home = () => {
    return (
        <>
            <Header />
            <Link to="/chat">
                <p className="text-base lg:text-2xl text-sad-purple">Moi!</p>;
            </Link>
            <div className="flex justify-between w-full">
                <div className="flex-col pl-24">
                    <h1 className="text-6xl w-30 pt-24">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <div className="text-3xl w-30 pt-20">
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum
                    </div>
                </div>
                <img className="w-1/2" src={Man} alt="man" />
            </div>
        </>
    );
};

export default Home;
