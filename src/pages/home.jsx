import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie.png";
import Pilar from "../assets/photos/pilar.png";

const Home = () => {
    return (
        <Layout>
            <div className="flex justify-between">
                <div className="flex-col pl-24">
                    <h1 className="pt-24 text-6xl text-white">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <p className="pt-20 text-3xl">
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum
                    </p>
                </div>
                <div className="w-full">
                    <img className="object-contain" src={Man} alt="man" />
                </div>
            </div>
            <button className="absolute bottom-0 right-0 mr-10 mt-10 transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow  p-6 p-8 shadow-2xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                <Link to="/chat">
                    <p className="text-base text-dragon-purple lg:text-2xl">
                        Miltä tuntuu?
                    </p>
                </Link>
            </button>
            <div className="flex justify-between">
                <div className="w-full">
                    <img src={Pie} alt="pie-chart" className="object-contain" />
                </div>
                <div className="flex flex-col px-8">
                    <h2 className="pt-48 text-5xl text-white">
                        Miehinenkin mies itkee
                    </h2>
                    <p className="pt-16 text-2xl">
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum
                    </p>
                </div>
            </div>
            <button className="ml-12 mt-10 transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                <Link to="/blog">
                    <p className="text-base text-dragon-purple lg:text-2xl">
                        Lue lisää!
                    </p>
                </Link>
            </button>
        </Layout>
    );
};

export default Home;
