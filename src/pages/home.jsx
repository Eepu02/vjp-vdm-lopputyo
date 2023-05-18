import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie.png";
import Pilar from "../assets/photos/pilar.png";
import Note from "../components/common/note";

const Home = () => {
    return (
        <Layout>
            <section className="flex min-h-screen flex-col justify-between lg:flex-row">
                <div className="p-6 md:p-20">
                    <h1 className="vertical-line font-urbanist text-6xl font-bold text-white">
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
            <button className="absolute bottom-0 right-4 mt-4 transform rounded-2xl border-2 border-dragon-purple border-yellow-300 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-6 shadow shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black lg:right-36 lg:mr-4 lg:mt-10 lg:p-8">
                <Link to="/chat">
                    <p className=" font-roboto text-zinc-700 lg:text-2xl">
                        JUTELLAAN HETKI!
                    </p>
                </Link>
            </button>
            <section className="flex min-h-screen flex-col justify-between lg:flex-row">
                <div className="relative flex w-full flex-col items-center">
                    <div className="pt-8 lg:pt-36">
                        <img
                            src={Pie}
                            alt="pie-chart"
                            className="h-auto w-1/2 scale-x-[-1] transform"
                        />
                        <div
                            className="absolute right-4 top-4 lg:right-16 "
                            style={{ width: "40%" }}
                        >
                            <Note>
                                <p className="font-indieflower">
                                    76% 18-34 vuotiaista miehistä tietää että
                                    tunteista puhuminen on hyväksi
                                    mielenterveydelle.
                                </p>
                            </Note>
                        </div>
                        <button className=" ml-4 mt-4 flex transform items-center justify-center rounded-full border-2 border-yellow-200 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-4 px-8 py-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black lg:ml-52 lg:mt-12 lg:p-8 lg:px-16">
                            <Link to="/blog">
                                <p className="font-roboto text-base text-dragon-purple lg:text-2xl">
                                    LUE LISÄÄ!
                                </p>
                            </Link>
                        </button>
                    </div>
                </div>
                <div className="border-l-[1px] border-happy-yellow pr-4 lg:pr-32">
                    <h2 className="pt-8 text-right font-urbanist text-4xl text-white lg:text-5xl">
                        Tunteet voimavarana
                    </h2>
                    <p className="pt-4 text-right font-roboto text-base text-white lg:pt-20 lg:text-xl">
                        Suurin osa nuorista miehistä tietää, että tunteiden
                        käsittelyllä on suuri rooli mielenterveyden kannalta.
                        Kuitenkin ympäröivä yhteiskunta luo helposti
                        vääristyneen käsityksen siitä, ettei niiden ilmaisu tai
                        niistä puhuminen ole luonnollista miehille.
                    </p>
                    <p className="pt-4 text-right font-roboto text-base text-white lg:text-xl">
                        Mikäli et koe että sinulla on turvallista ympäristöä
                        tunteista keskustelemiselle, tunneymmärrys jää herkästi
                        puutteelliseksi. Tällä on merkittävän iso vaikutus
                        mielenterveyteen, yllä mainittu keskustelu kun on jo
                        vuosikymmeniä sitten todettu mielenterveyttä
                        ylläpitäväksi.
                    </p>
                </div>
            </section>
            <section className="flex min-h-screen flex-col justify-between pt-8 lg:flex-row lg:pt-40">
                <div className="flex w-full flex-col items-center justify-center pl-4 lg:ml-12 lg:w-1/2">
                    <div className="w-3/4">
                        <p className="pt-8 font-urbanist text-4xl text-white lg:text-5xl">
                            Miehinenkin mies itkee
                        </p>
                        <div className="pt-4 font-roboto text-base text-white lg:pt-16 lg:text-xl">
                            <p className="pt-4">
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
                            <p className="pt-4">
                                Tunteellisuus siis mielletään ominaisuutena
                                femininiiniseksi, ja paikoittain negatiiviseksi.
                                Kuitenkin todellisen elämän satuprinssit ja
                                sankarit ovat niitä, jotka kykenevät raivoamatta
                                kertomaan, mikä tänään ärsytti ja miksi.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative flex w-full flex-col pt-8 lg:ml-36 lg:ml-4 lg:w-1/2 lg:pt-40">
                    <img
                        src={Pilar}
                        alt="pilar-graph"
                        className="h-auto w-full"
                        style={{ width: "65%" }}
                    />
                    <div className="absolute top-4 " style={{ width: "40%" }}>
                        <p className="px-4 font-josefin text-base font-bold text-white lg:px-8 lg:text-2xl">
                            Silti yli 58% miehistä kokee painetta olla
                            emotionaalisesti vahva
                        </p>
                    </div>
                    <button className=" mr-52 mt-12 flex transform items-center justify-center rounded-full border-2 border-yellow-200 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-500 p-8 px-12 py-2 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110  hover:border-black">
                        <Link to="/blog">
                            <p className="font-roboto text-base text-dragon-purple lg:text-2xl">
                                LUE LISÄÄ!
                            </p>
                        </Link>
                    </button>
                </div>
            </section>
            <section className="flex min-h-screen justify-between pt-40">
                <div className="flex flex-col items-center  pt-40 lg:w-1/2">
                    <p className="pt-56 font-josefin text-2xl text-white">
                        Me kuuntelemme{" "}
                    </p>
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
            <div className="flex justify-center pt-32">
                <button className="bottom-0 transform rounded-full border-2 border-dragon-purple border-yellow-300 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-400 p-6 p-8 shadow shadow-2xl transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-black">
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
