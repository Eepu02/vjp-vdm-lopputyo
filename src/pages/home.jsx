import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie.png";
import Pilar from "../assets/photos/pilar.png"

const Home = () => {
    return (
        <Layout>
            {" "}
            <div className="flex-col">
                <div className="flex w-full justify-between">
                    <div className="flex-col pl-24">
                        <h1 className="w-30 pt-24 text-6xl text-white">
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
                <div className="flex w-full justify-between">
                    <img src={Pie} alt="pie-chart" className="w-1/3" />
                    <div className="flex-col"> 
                        <h2 className="w-30 text-5xl pt-48 pr-24 text-white">Miehinenkin mies itkee</h2> 
                        <div className="w-24 text-2xl pt-16">
                            lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        </div>
                    </div>
                </div>
                <button className="ml-12 mt-10 transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                    <Link to="/blog">
                        <p className="text-base text-dragon-purple lg:text-2xl">
                            Lue lisää!
                        </p>
                    </Link>
                </button>
            </div>
        </Layout>
    );
};

export default Home;
