import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie.png";
import Pilar from "../assets/photos/pilar.png";
import Note from "../components/common/note";

const Test = () => {
    return (
        <Layout className="text-white">
            <section className="">
                <div className="p-6 md:p-20">
                    <h1 className="font-urbanist text-6xl font-bold">
                        Tunteet ovat sokeita sukupuolelle
                    </h1>
                    <p className="max-w-prose pt-4 text-3xl text-slate-200">
                        Miehisyyttä ja emotionaalisuutta pidetään herkästi
                        toisiaan poissulkevina, eikä tunteista puhuminen tunnu
                        aina turvalliselta ja sallitulta. Haluamme tarjota
                        sinulle turvallisen tilan puhua tunteistasi ja
                        mahdollisesti oppia tunnetyöstä enemmän. Kerro meille
                        miltä sinusta tuntuu, kuten tunteet, mekin olemme
                        sokeita sukupuolelle.
                    </p>
                </div>
                <div className="w-full">
                    <img className="h-auto w-full" src={Man} alt="man" />
                </div>
            </section>
            {/* <button className="absolute bottom-0 right-4 mt-4 transform rounded-2xl border-2 border-dragon-purple border-yellow-300 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-6 shadow shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black lg:right-36 lg:mr-4 lg:mt-10 lg:p-8">
                <Link to="/chat">
                    <p className=" font-roboto text-zinc-700 lg:text-2xl">
                        JUTELLAAN HETKI!
                    </p>
                </Link>
            </button> */}
            <section className="p-6 md:p-20">
                <div className="">
                    <div className="">
                        <img
                            src={Pie}
                            alt="pie-chart"
                            className="h-auto w-1/2 scale-x-[-1] transform"
                        />
                        <div
                        // className="absolute right-4 top-4 lg:right-16 "
                        // style={{ width: "40%" }}
                        >
                            <Note>
                                <p className="font-indieflower text-dragon-purple">
                                    76% 18-34 vuotiaista miehistä tietää että
                                    tunteista puhuminen on hyväksi
                                    mielenterveydelle.
                                </p>
                                <div className="mt-4 flex items-center justify-center">
                                    <Link
                                        to="/blog"
                                        className="rounded-full border-2 border-yellow-200 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-4 text-dragon-purple transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black"
                                    >
                                        LUE LISÄÄ!
                                    </Link>
                                </div>
                            </Note>
                        </div>
                    </div>
                </div>
                <div className="">
                    <h2 className="text-6xl">Tunteet voimavarana</h2>
                    <p className="pt-4 text-2xl">
                        Suurin osa nuorista miehistä tietää, että tunteiden
                        käsittelyllä on suuri rooli mielenterveyden kannalta.
                        Kuitenkin ympäröivä yhteiskunta luo helposti
                        vääristyneen käsityksen siitä, ettei niiden ilmaisu tai
                        niistä puhuminen ole luonnollista miehille.
                    </p>
                    <p className="pt-4 text-2xl">
                        Mikäli et koe että sinulla on turvallista ympäristöä
                        tunteista keskustelemiselle, tunneymmärrys jää herkästi
                        puutteelliseksi. Tällä on merkittävän iso vaikutus
                        mielenterveyteen, yllä mainittu keskustelu kun on jo
                        vuosikymmeniä sitten todettu mielenterveyttä
                        ylläpitäväksi.
                    </p>
                </div>
            </section>
            <section className="">
                <div className="">
                    <div className="">
                        <p className="">Miehinenkin mies itkee</p>
                        <div className="">
                            <p className="">
                                On kovinkin tyypillistä että nuorena miehenä
                                olet kasvaessasi ja kehittyessäsi huomaamatta
                                sisäistänyt ajatuksen siitä että tunteet
                                kuuluvat naisille. Miehiä kasvatetaan jopa
                                lapsille suunnatun viihteen kautta omaksumaan
                                kova ulkokuori. Sotasankareilta itku on
                                hyväksyttävää, vain mikäli esimerkiksi läheinen
                                menehtyy, muuten turha tunteellisuus on vain
                                heikkous.
                            </p>
                            <p className="">
                                Tunteellisuus siis mielletään ominaisuutena
                                femininiiniseksi, ja paikoittain negatiiviseksi.
                                Kuitenkin todellisen elämän satuprinssit ja
                                sankarit ovat niitä, jotka kykenevät raivoamatta
                                kertomaan, mikä tänään ärsytti ja miksi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="">
                    <img
                        src={Pilar}
                        alt="pilar-graph"
                        className="h-auto w-full"
                        style={{ width: "65%" }}
                    />
                    <div className="">
                        <p className="">
                            Silti yli 58% miehistä kokee painetta olla
                            emotionaalisesti vahva
                        </p>
                    </div>
                    <button className="">
                        <Link to="/blog">
                            <p className="">LUE LISÄÄ!</p>
                        </Link>
                    </button>
                </div>
            </section>
            <section className="">
                <div className="">
                    <p className="">Me kuuntelemme</p>
                </div>
                <div className="flex flex-col justify-center">
                    <div className="h-96 w-px self-center bg-happy-yellow pt-56 "></div>
                    <div className="triangle-arrow self-center"></div>
                </div>
                <div className="flex flex-col items-center lg:w-1/2 ">
                    <div className="lg:w-1/2">
                        <p className="pt-8 font-josefin text-2xl text-white">
                            Palkitse sisäinen pikkuprinssisi ja opi puhumaan
                            tunteista{" "}
                        </p>
                    </div>
                </div>
            </section>
            <div className="">
                <button className="">
                    <Link to="/chat">
                        <p className="">Milloin itkit viimeksi? Miksi?</p>
                    </Link>
                </button>
            </div>
        </Layout>
    );
};

export default Test;
