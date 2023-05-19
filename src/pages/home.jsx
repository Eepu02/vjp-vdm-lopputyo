import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie.png";
import Pilar from "../assets/photos/pilar.png";
import Video from "../components/home/video";

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-between md:flex-row lg:flex-row ">
                <div className="flex-col pl-16 lg:pl-24 w-full lg:w-1/2 md:w-1/2 md:pl-16 md:h-full">
                    <h1 className="pt-12 pl-4 lg:pt-24 md:pt-24 lg:pl-10 font-urbanist text-4xl lg:text-6xl text-white vertical-line">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <p className="pt-8 md:pt-16 pl-4 lg:pt-60 lg:pl-12 font-roboto text-base lg:text-lg text-white pr-8 ">
                        <p className="">Miehisyyttä ja emotionaalisuutta pidetään herkästi toisiaan poissulkevina, 
                        eikä tunteista puhuminen tunnu aina turvalliselta ja sallitulta. Haluamme tarjota sinulle turvallisen tilan puhua tunteistasi ja mahdollisesti oppia tunnetyöstä enemmän. 
                        Kerro meille miltä sinusta tuntuu, kuten tunteet, mekin olemme sokeita sukupuolelle.
                        </p> 
                    </p>
                </div>
                <div className="w-full lg:w-1/2 md:w-1/2 md:pr-0 md:pt-48">
                    <img className="w-full h-auto" src={Man} alt="man" />
                </div>
            </div>
            <button className="animate-bounce absolute bottom-0 right-16 lg:right-36 lg:mr-4  mt-4 lg:mt-10 transform rounded-2xl border-2 border-dragon-purple shadow bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 border-yellow-300 to-yellow-400 p-6 lg:p-8 shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                <Link to="/chat">
                    <p className=" font-roboto text-zinc-700 lg:text-2xl">
                        JUTELLAAN HETKI?
                    </p>
                </Link>
            </button>
            <div className="flex flex-col-reverse md:flex-row lg:flex-row justify-between md:mt-20">
                <div className="relative flex flex-col items-center w-full lg:w-1/2">
                    <div className="pt-16 md:pt-44 lg:pt-36">
                        <img src={Pie} alt="pie-chart" className=" h-auto transform scale-x-[-1] " />
                        <div className="absolute top-24 md:top-28 right-8 md:right-4 lg:right-16 "style={{ width: "40%" }} >
                            <div className="text-black lg:text-black font-josefin font-bold text-base lg:text-2xl px-4 md:px-2 lg:px-8"> 76% 18-34 vuotiaista miehistä tietää että tunteista puhuminen on hyväksi mielenterveydelle
                        </div>    
                        </div>
                        <button className="mt-8 lg:mt-12 px-16  lg:px-16 py-2 ml-40 lg:ml-52 flex items-center justify-center mt-4 lg:mt-10 transform rounded-full border-2 border-yellow-200 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-4 lg:p-8 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                            <Link to="/blog">
                                <p className="text-base font-roboto text-dragon-purple lg:text-2xl">
                                LUE LISÄÄ!
                                </p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className=" lg:h-96 w-px bg-happy-yellow self-center" ></div>
                <div className="flex flex-col justify-center pr-12 pl-12 pt-8 lg:pr-32 w-full lg:w-1/2">
                    <h2 className="pt-8 text-center md:text-right  font-urbanist text-4xl lg:text-right lg:text-5xl text-white">
                        Tunteet voimavarana
                    </h2>
                    <p className="font-roboto pt-8 lg:pt-20 text-right text-base lg:text-xl text-white">
                        Suurin osa nuorista miehistä tietää, että tunteiden käsittelyllä on suuri rooli mielenterveyden kannalta. 
                        Kuitenkin ympäröivä yhteiskunta luo helposti vääristyneen käsityksen siitä, ettei niiden ilmaisu tai niistä puhuminen ole luonnollista miehille.
                    </p>
                    <p className = "font-roboto pt-8 lg:pt-4 text-right text-base lg:text-xl text-white">
                        Mikäli et koe että sinulla on turvallista ympäristöä tunteista keskustelemiselle, tunneymmärrys jää herkästi puutteelliseksi.
                        Tällä on merkittävän iso vaikutus mielenterveyteen, yllä mainittu keskustelu kun on jo vuosikymmeniä sitten todettu mielenterveyttä ylläpitäväksi.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between lg:flex-row pt-16 lg:pt-8 lg:pt-40">
                <div className="flex flex-col justify-center items-center lg:pl-4 lg:ml-12 w-full lg:w-1/2">
                    <div className="w-3/4">
                        <p className="pt-8 font-urbanist text-4xl lg:text-5xl text-white">
                            Miehinenkin mies itkee
                        </p>
                        <div className="pt-4 lg:pt-16 text-base lg:text-xl text-white font-roboto">
                            <p className="pt-4">
                                On kovinkin tyypillistä että nuorena miehenä olet kasvaessasi ja kehittyessäsi huomaamatta sisäistänyt ajatuksen siitä että tunteet kuuluvat naisille.
                                Miehiä kasvatetaan jopa lapsille suunnatun viihteen kautta omaksumaan kova ulkokuori. Sotasankareilta itku on hyväksyttävää, vain mikäli esimerkiksi
                                läheinen menehtyy, muuten turha tunteellisuus on vain heikkous.
                            </p>
                            <p className="pt-4 md:pt-8">
                                Tunteellisuus siis mielletään ominaisuutena femininiiniseksi, ja paikoittain negatiiviseksi. Kuitenkin todellisen elämän satuprinssit ja sankarit ovat niitä, jotka kykenevät raivoamatta kertomaan, mikä tänään ärsytti ja miksi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col items-center  pt-20 lg:pt-40 w-full lg:w-1/2 lg:ml-4 lg:ml-36">
                    <img src={Pilar} alt="pilar-graph" className="w-full h-auto" style={{ width: "65%" }} />
                    <div className="absolute lg:top-20 md:top-28 top-24 lg:top-4 left-20 md:left-32 " style={{ width: "40%" }} >
                        <p className=" font-josefin font-bold text-base text-black  lg:text-2xl md:text-xl px-4 md:px-8 lg:px-8">
                            Silti yli 58% miehistä kokee painetta olla emotionaalisesti vahva
                        </p>
                    </div>
                    <button className=" mt-12 px-12 py-2  flex items-center justify-center  transform rounded-full border-2 border-yellow-200 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-500 p-8 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:border-black">
                         <Link to="/blog">
                            <p className="text-base font-roboto text-dragon-purple lg:text-2xl">
                                LUE LISÄÄ!
                            </p>
                        </Link>
                    </button> 
                </div>
            </div>
            <div className="flex justify-between pt-20  ">
                <div className="flex flex-col w-1/2 items-center pl-8 pr-8">
                    <p className="text-2xl lg:text-4xl text-white font-josefin pt-56">Me kuuntelemme </p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="h-96 w-px pt-56 bg-happy-yellow self-center " ></div>
                    <div className="triangle-arrow self-center"></div>
                </div>
                <div className="flex flex-col w-1/2 pl-8 pr-8 items-center ">
                    <div className="flex lg:w-1/2  ">
                        <p className="text-2xl lg:text text-white font-josefin pt-8">Palkitse sisäinen pikkuprinssisi ja opi puhumaan tunteista </p>
                    </div>
                    
                </div>
            </div>

            <div className="flex justify-center p-12">
                <Video />
            </div>
            <div className="flex justify-center pt-16 lg:pt-32 mb-16">
                <button className="bottom-0 transform rounded-full border-2 border-dragon-purple shadow bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 border-yellow-300 p-6 p-8 shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                    <Link to="/chat">
                        <p className=" font-roboto text-zinc-700 lg:text-2xl">
                            Milloin itkit viimeksi? Miksi?
                        </p>
                    </Link>
                </button>
            </div>
        
        </Layout>
    );
};

export default Home;
