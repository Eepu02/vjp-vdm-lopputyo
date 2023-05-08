import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Man from "../assets/photos/man.png";

const Home = () => {
    return (
        <>
            <Header />

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
            <button className="absolute bottom-0 right-0 mr-10 mt-10 transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow  p-6 p-8 shadow-2xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                <Link to="/chat">
                    <p className="text-base text-dragon-purple lg:text-2xl">
                        Miltä tuntuu?
                    </p>
                </Link>
            </button>
            <button className="ml-12 mt-10 transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-opacity-75">
                <Link to="/blog">
                    <p className="text-base text-dragon-purple lg:text-2xl">
                        Lue lisää!
                    </p>
                </Link>
            </button>
            <Footer />
        </>
    );
};

export default Home;
