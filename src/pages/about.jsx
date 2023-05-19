import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import BlogItem from "../components/blog/blogItem";
import InfoBox from "../components/about/infoBox";
import instagram from "../assets/icons/instagram.png";
import facebook from "../assets/icons/facebook.png";
import tiktok from "../assets/icons/tiktok.png";
import Man from "../assets/photos/man.png";

const About = () => {
    return (
        <Layout>
            <div className="flex-cols-1 lg:flex-cols-2 m-8 flex text-white lg:m-16">
                <BlogItem
                    heading="Kaikki saavat näyttää tunteensa"
                    text={
                        <div className="space-y-6">
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
                <div>
                    
                </div>
            </div>

            <div className="m-6 flex grid-cols-2 flex-col space-y-6 lg:m-12 lg:mb-52 lg:grid lg:gap-8 lg:space-y-0">
                <InfoBox
                    heading="Miksi kampanjamme on olemassa?"
                    text={
                        <div className="space-y-6">
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
                        <div>
                            <p>
                                Osallistu somehaasteeseen: katso, kun muut
                                kertovat milloin ovat viimeksi itkeneet ja miksi
                                ja jaa omat tunteesi{" "}
                                <a className="text-happy-yellow" href="/">
                                    #MinäkinItken
                                </a>
                            </p>
                            <Link to="/chat">
                                <p className="hover:text-happy-yellow">
                                    Keskustele
                                </p>
                            </Link>
                            <Link to="/blog">
                                <p className="hover:text-happy-yellow">
                                    Lue muiden kokemuksia
                                </p>
                            </Link>
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
                        <div className="space-y-4">
                            <p>
                                Onko sinulla kysyttävää, ideoita tai ajatuksia
                                kampanjaan liittyen. Ota yhteyttä:
                            </p>
                            <p className="text-happy-yellow underline">@</p>
                            <p className="text-happy-yellow underline">
                                044 123 4567
                            </p>
                        </div>
                    }
                />
            </div>
        </Layout>
    );
};

export default About;
