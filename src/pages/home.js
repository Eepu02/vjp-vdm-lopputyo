import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Man from "../assets/photos/man.png";

const Home = () => {
    return (
        <>
            <Header />
            <Link to="/chat">
                <p className="text-base text-sad-purple lg:text-2xl">Moi!</p>;
            </Link>
            <div className="flex w-full justify-between">
                <div className="flex-col pl-24">
                    <h1 className="w-30 pt-24 text-6xl">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <div className="w-30 pt-20 text-3xl">
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
