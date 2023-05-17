import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie.png";
import Pilar from "../assets/photos/pilar.png";

const Home = () => {
    return (
        <Layout>
            <div className="flex flex-col justify-between lg:flex-row">
                <div className="flex-col pl-4 lg:pl-24 w-full lg:w-1/2">
                    <h1 className="pt-8 pl-4 lg:pt-24 lg:pl-10 font-urbanist text-4xl lg:text-6xl text-white vertical-line">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <p className="pt-8 pl-4 lg:pt-60 lg:pl-12 font-roboto text-base lg:text-lg text-white">
                        <p className="">Miehisyyttä ja emotionaalisuutta pidetään herkästi toisiaan poissulkevina, 
                        eikä tunteista puhuminen tunnu aina turvalliselta ja sallitulta. Haluamme tarjota sinulle turvallisen tilan puhua tunteistasi ja mahdollisesti oppia tunnetyöstä enemmän. 
                        Kerro meille miltä sinusta tuntuu, kuten tunteet, mekin olemme sokeita sukupuolelle.
                        </p> 
                    </p>
                </div>
                <div className="w-full lg:w-1/2">
                    <img className="w-full h-auto" src={Man} alt="man" />
                </div>
            </div>
            <button className="animate-bounce absolute bottom-0 right-4 lg:right-36 mr-4 mt-4 lg:mt-10 transform rounded-2xl border-2 border-dragon-purple shadow bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 border-yellow-300 to-yellow-400 p-6 lg:p-8 shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                <Link to="/chat">
                    <p className=" font-roboto text-zinc-700 lg:text-2xl">
                        JUTELLAAN HETKI?
                    </p>
                </Link>
            </button>
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="relative flex flex-col items-center w-full lg:w-1/2">
                    <div className="pt-8 lg:pt-36">
                        <img src={Pie} alt="pie-chart" className="w-1/2 h-auto transform scale-x-[-1]" />
                        <div className="absolute top-4 right-4 lg:right-16 "style={{ width: "40%" }} >
                            <div className="text-white font-josefin font-bold text-base lg:text-2xl px-4 lg:px-8"> 76% 18-34 vuotiaista miehistä tietää että tunteista puhuminen on hyväksi mielenterveydelle
                            </div>    
                        </div>
                        <button className="mt-4 lg:mt-12 px-8 lg:px-16 py-2 ml-4 lg:ml-52 flex items-center justify-center mt-4 lg:mt-10 transform rounded-full border-2 border-yellow-200 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-4 lg:p-8 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                            <Link to="/blog">
                                <p className="text-base font-roboto text-dragon-purple lg:text-2xl">
                                LUE LISÄÄ!
                                </p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="h-32 lg:h-96 w-px bg-happy-yellow self-center" ></div>
                <div className="flex flex-col justify-center pr-4 lg:pr-32 w-full lg:w-1/2">
                    <h2 className="pt-8 text-right font-urbanist text-4xl lg:text-5xl text-white">
                        Tunteet voimavarana
                    </h2>
                    <p className="font-roboto pt-4 lg:pt-20 text-right text-base lg:text-xl text-white">
                        Suurin osa nuorista miehistä tietää, että tunteiden käsittelyllä on suuri rooli mielenterveyden kannalta. 
                        Kuitenkin ympäröivä yhteiskunta luo helposti vääristyneen käsityksen siitä, ettei niiden ilmaisu tai niistä puhuminen ole luonnollista miehille.
                    </p>
                    <p className = "font-roboto pt-4 text-right text-base lg:text-xl text-white">
                        Mikäli et koe että sinulla on turvallista ympäristöä tunteista keskustelemiselle, tunneymmärrys jää herkästi puutteelliseksi.
                        Tällä on merkittävän iso vaikutus mielenterveyteen, yllä mainittu keskustelu kun on jo vuosikymmeniä sitten todettu mielenterveyttä ylläpitäväksi.
                    </p>
                </div>
            </div>
            <div className="flex flex-col justify-between lg:flex-row pt-8 lg:pt-40">
                <div className="flex flex-col justify-center items-center ml-4 lg:ml-12 w-full lg:w-1/2">
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
                            <p className="pt-4">
                                Tunteellisuus siis mielletään ominaisuutena femininiiniseksi, ja paikoittain negatiiviseksi. Kuitenkin todellisen elämän satuprinssit ja sankarit ovat niitä, jotka kykenevät raivoamatta kertomaan, mikä tänään ärsytti ja miksi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex flex-col pt-8 lg:pt-40 w-full lg:w-1/2 ml-4 lg:ml-36">
                    <img src={Pilar} alt="pilar-graph" className="w-full h-auto" style={{ width: "65%" }} />
                    <div className="absolute top-4 " style={{ width: "40%" }} >
                        <p className="text-white font-josefin font-bold text-base lg:text-2xl px-4 lg:px-8">
                            Silti yli 58% miehistä kokee painetta olla emotionaalisesti vahva
                        </p>
                    </div>
                    <button className=" mt-12 px-12 py-2 mr-52 flex items-center justify-center mt-10 transform rounded-full border-2 border-yellow-200 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-500 p-8 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:border-black">
                         <Link to="/blog">
                            <p className="text-base font-roboto text-dragon-purple lg:text-2xl">
                                LUE LISÄÄ!
                            </p>
                        </Link>
                    </button> 
                </div>
            </div>
            <div className="flex justify-between pt-40">
                <div className="flex flex-col w-1/2  items-center pt-40">
                    <p className="text-2xl text-white font-josefin pt-56">Me kuuntelemme </p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="h-96 w-px pt-56 bg-happy-yellow self-center " ></div>
                    <div className="triangle-arrow self-center"></div>
                </div>
                <div className="flex flex-col w-1/2 items-center ">
                    <div className="w-1/2">
                        <p className="text-2xl text-white font-josefin pt-8">Palkitse sisäinen pikkuprinssisi ja opi puhumaan tunteista </p>
                    </div>
                    
                </div>
            </div>
            <div className="flex justify-center pt-32">
                <button className="  bottom-0   transform rounded-full border-2 border-dragon-purple shadow bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 border-yellow-300 p-6 p-8 shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
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
