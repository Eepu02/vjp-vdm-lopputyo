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
                <div className="flex-col pl-24 w-1/2">
                    <h1 className="pt-36  text-6xl text-white">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <p className="pt-20 text-3xl">
                        <p className="">Miehisyyttä ja emotionaalisuutta pidetään herkästi toisiaan poissulkevina 
                        eikä tuntiesta puhuminen tunnu aina turvalliselta ja sallitulta.
                        </p>
                        <p className="pt-10">Haluamme tarjota sinulle turvallisen tilan puhua tunteistasi ja mahdollisesti oppia tunnetyöstä enemmän. 
                        Kerro meille miltä sinusta tuntuu, kuten tunteet, mekin olemme sokeita sukupuolelle.
                        </p>
                    </p>
                </div>
                <div className="w-1/2">
                    <img className=" flex-shrink-0 " src={Man} alt="man" />
                </div>
            </div>
            <button className="absolute bottom-0 right-36 mr-10 mt-10 transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow  p-6 p-8 shadow-2xl transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600">
                <Link to="/chat">
                    <p className="text-base text-dragon-purple lg:text-2xl">
                        Miltä tuntuu?
                    </p>
                </Link>
            </button>
            <div className="flex justify-between">
                <div className=" relative flex flex-col items-center w-1/2">
                    <div className="pt-36">
                        <img src={Pie} alt="pie-chart" className="flex-shrink-0 transform scale-x-[-1]" />
                        <div className="absolute top-36 right-16 "style={{ width: "40%" }} >
                            <div className="text-white font-bold text-2xl px-8"> 76% 18-34 vuotiaista miehistä tietää että tunteista puhuminen on hyväksi mielenterveydelle
                            </div>    
                        </div>
                        <button className=" mt-12 px-16 py-2 ml-52 flex items-center justify-center mt-10 transform rounded-full border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 ">
                            <Link to="/blog">
                                <p className="text-base text-dragon-purple lg:text-2xl">
                                Lue lisää!
                                </p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="flex flex-col justife-center pr-36" style={{ width: "40%" }}>
                    <h2 className="pt-40  text-5xl text-white">
                        Miehinenkin mies itkee
                    </h2>
                    <p className="pt-16 text-xl">
                        Suurin osa nuorista miehistä tietää että tunteiden käsittelyllä on suuri rooli mielenterveyden kannalta. 
                        Kuitenkin ympäröivä yhteiskunta luo helposti vääristyneen käsityksen siitä, ettei niiden ilmaisu tai niistä puhuminen ole luonnollista miehille.
                        Mikäli et koe että sinulla on turvallista ympäristöä tunteista keskustelemiselle, tunneymmärrys jää herkästi puutteelliseksi.
                        Tällä on merkittävän iso vaikutus mielenterveyteen, yllä mainittu keskustelu kun on jo vuosikymmeniä sitten todettu mielenterveyttä ylläpitäväksi.
                    </p>
                </div>
            </div>
            <div className="flex justify-between ">
                <div className="flex flex-col justify-center items-center ml-12 w-1/2">
                    <div className="w-3/4">
                        <p className="pt-36 text-5xl text-white">
                            Otsikko Tähän Näin
                        </p>
                        <div className="pt-16 text-xl text-black">
                            <p className="">
                            lorem lipum lorem lipsum blaa blaa blaa lorem lipumlorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipumlorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                            </p>
                            <p className="pt-12">
                            lorem lipum lorem lipsum blaa blaa blaa lorem lipumlorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipumlorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col pt-40 w-1/2 ml-36 ">
                    <img src={Pilar} alt="pilar-graph" className=" " style={{ width: "65%" }} />
                    <div className="absolute top-28 left-[-10%]" style={{ width: "40%" }} >
                        <p className="text-white font-bold text-2xl px-8">
                            Silti yli 58% miehistä kokee painetta olla emotionaalisesti vahva
                        </p>
                    </div>
                    <button className=" mt-12 px-12 py-2 mr-52 flex items-center justify-center mt-10 transform rounded-full border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-yellow-600 ">
                         <Link to="/blog">
                            <p className="text-base text-dragon-purple lg:text-2xl">
                                Lue lisää!
                            </p>
                        </Link>
                    </button> 
                </div>
            </div>
        
        </Layout>
    );
};

export default Home;
