import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import BlogItem from "../components/blog/blogItem";
import InfoBox from "../components/about/infoBox";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import tiktok from "../assets/icons/tiktok.png";
import Man from "../assets/photos/man.png";
import Miehet from "../assets/photos/miehet_ry.jpg";

const About = () => {
    return (
        <Layout>
            <div className="">
                <div className=" flex flex-col justify-center items-center lg:grid lg:grid-cols-2 lg:m-8 mt-8 ml-16 mr-16 text-white lg:m-16 ">
                    <BlogItem
                        heading="Kaikki saavat näyttää tunteensa"
                        text={
                            <div className="space-y-6 text-xl">
                                <p>
                                    Tunteet ovat sokeita sukupuolelle -kampanja on
                                    Miehet RY:n hallinnoima kampanja, joka pyrkii
                                    rikkomaan stereotyyppisiä ja toksisia käsityksiä
                                    maskuliinisuudesta ja sen tunnepitoisuudesta.
                                    Tunteiden kokeminen on sukupuolesta
                                    riippumatonta, eikä se tai tunteista puhuminen
                                    viesti heikkoudesta vaan päinvastoin.
                                </p>
                            </div>
                        }
                        />
                    <div className="mt-8 w-full md:w-2/3 lg:w-full lg:mt-36 flex justify-center ">
                        <img src={Miehet} alt="pilar-graph" className=" h-auto" style={{ width: "65%" }} />
                    </div>
                </div>

                <div className="m-6 ml-16 mr-16 flex grid-cols-2 flex-col space-y-6 lg:m-12 lg:mb-52 lg:grid lg:gap-8 lg:space-y-0 text-white">
                    <InfoBox
                        heading="Miksi kampanjamme on olemassa?"
                        text={
                            <div className="space-y-6 text-xl  ">
                                <p>
                                    Nuorten mielenterveysongelmat ovat koko ajan
                                    kasvava yhteskunnallinen ongelma. Tunteiden
                                    näyttäminen ja niiden käsitteleminen on tärkeä
                                    osa hyvinvointia ja mielenterveysongelmien
                                    ennaltaehkäisemistä. Kampanja rohkaisee
                                    erityisesti nuoria miehiä näyttämään tunteensa
                                    sekä tarjoaa keskusteluapua, tietoa ja
                                    vertaistukea.{" "}
                                </p>
                            </div>
                        }
                    />
                    <InfoBox
                        heading="Osallistu"
                        text={
                            <div className="space-y-6 text-xl ">
                                <p>
                                    Osallistu somehaasteeseen: katso, kun muut
                                    kertovat milloin ovat viimeksi itkeneet ja miksi
                                    ja jaa omat tunteesi{" "}
                                    <div className="mt-8">
                                        <a className="text-happy-yellow m" href="/">
                                            #MinäkinItken
                                        </a>
                                    </div>
                                </p>
                                <button className="transform rounded-full mr-12 px-8 py-4 border-2 border-dragon-purple shadow   from-happy-yellow via-yellow-300 to-yellow-400 border-yellow-300  p-6 shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                                    <Link to="/chat">
                                        <div className="">
                                            <p className="hover:text-black ">
                                                Keskustele
                                            </p>
                                        </div>
                                    </Link>
                                </button>
                                <button className="transform rounded-full px-8 py-4 border-2 border-dragon-purple shadow   from-happy-yellow via-yellow-300 to-yellow-400 border-yellow-300  p-6 shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
                                    <Link to="/blog">
                                        <p className="hover:text-black">
                                            Lue muiden kokemuksia
                                        </p>
                                    </Link>
                                </button>
                            </div>
                        }
                    />
                    <InfoBox
                        heading="Sosiaalinen media"
                        text={
                            <div className="flex flex-row gap-4">
                                <img
                                    src={instagram}
                                    alt="instagram"
                                    className="w-10"
                                />
                                <img
                                    src={facebook}
                                    alt="facebook"
                                    className="w-10"
                                />
                                <img src={tiktok} alt="tiktok" className="w-10" />
                            </div>
                        }
                    />
                    <InfoBox
                        heading="Yhteystiedot"
                        text={
                            <div className="space-y-4 text-xl font-roboto">
                                <p>
                                    Onko sinulla kysyttävää, ideoita tai ajatuksia
                                    kampanjaan liittyen. Ota yhteyttä:
                                </p>
                                <div className="pt-8">
                                    <p className="text-happy-yellow underline ">sokeattunteet@tuki.fi</p>
                                </div>
                                <div className="pt-8">
                                    <p className="text-happy-yellow underline">
                                        044 123 4567
                                    </p>
                                </div>
                            </div>
                        }
                    />
                </div>
            </div>
        </Layout>
    );
};

export default About;
