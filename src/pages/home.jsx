import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layouts/layout";
import Man from "../assets/photos/man.png";
import Pie from "../assets/photos/pie_square.png";
import Pilar from "../assets/photos/pilar.png";
import Note from "../components/common/note";

const Home = () => {
    const buttonStyle =
        "text-dragon-purple rounded-full border-2 border-yellow-200 bg-blue-600 bg-gradient-to-r from-happy-yellow via-yellow-300 to-yellow-500 p-3 px-5 transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-105  hover:border-black";
    return (
        <Layout className="mx-auto grid max-w-[2000px] grid-cols-1 text-white md:grid-cols-2">
            <div className="m-8 lg:m-20">
                <h1 className="text-5xl md:text-7xl">
                    Tunteet ovat sokeita sukupuolelle
                </h1>
                <p className="mt-8 text-lg md:text-3xl">
                    Miehisyyttä ja emotionaalisuutta pidetään herkästi toisiaan
                    poissulkevina, eikä tunteista puhuminen tunnu aina
                    turvalliselta ja sallitulta. Haluamme tarjota sinulle
                    turvallisen tilan puhua tunteistasi ja mahdollisesti oppia
                    tunnetyöstä enemmän. Kerro meille miltä sinusta tuntuu,
                    kuten tunteet, mekin olemme sokeita sukupuolelle.
                </p>
            </div>
            <div>
                <img src={Man} alt="man" />
            </div>
            <div className="m-8 lg:m-20">
                <div className="relative min-h-[600px]">
                    <div className="absolute right-0 top-0 z-10">
                        <Note>
                            <p className="font-indieflower text-dragon-purple">
                                76% 18-34 vuotiaista miehistä tietää että
                                tunteista puhuminen on hyväksi mielenterveydelle
                            </p>
                            <div className="mt-4 flex justify-center">
                                <Link to="/blog" className={buttonStyle}>
                                    Lue lisää
                                </Link>
                            </div>
                        </Note>
                    </div>
                    <div className="absolute bottom-0 left-0">
                        <img
                            className="-scale-x-100"
                            src={Pie}
                            alt="pie chart"
                        />
                    </div>
                </div>
            </div>
            <div className="m-8 lg:m-20">
                <h2 className="text-5xl">Tunteet voimavarana</h2>
                <p className="mt-8 text-lg md:text-3xl">
                    Suurin osa nuorista miehistä tietää, että tunteiden
                    käsittelyllä on suuri rooli mielenterveyden kannalta.
                    Kuitenkin ympäröivä yhteiskunta luo helposti vääristyneen
                    käsityksen siitä, ettei niiden ilmaisu tai niistä puhuminen
                    ole luonnollista miehille.
                </p>
                <p className="mt-8 text-lg md:text-3xl">
                    Mikäli et koe että sinulla on turvallista ympäristöä
                    tunteista keskustelemiselle, tunneymmärrys jää herkästi
                    puutteelliseksi. Tällä on merkittävän iso vaikutus
                    mielenterveyteen, yllä mainittu keskustelu kun on jo
                    vuosikymmeniä sitten todettu mielenterveyttä ylläpitäväksi.
                </p>
            </div>
            <div className="m-8 lg:m-20">
                <h2 className="text-5xl">Miehinenkin mies itkee</h2>
                <p className="mt-8 text-lg md:text-3xl">
                    On kovinkin tyypillistä että nuorena miehenä olet
                    kasvaessasi ja kehittyessäsi huomaamatta sisäistänyt
                    ajatuksen siitä että tunteet kuuluvat naisille. Miehiä
                    kasvatetaan jopa lapsille suunnatun viihteen kautta
                    omaksumaan kova ulkokuori. Sotasankareilta itku on
                    hyväksyttävää, vain mikäli esimerkiksi läheinen menehtyy,
                    muuten turha tunteellisuus on vain heikkous.
                </p>
                <p className="mt-8 text-lg md:text-3xl">
                    Tunteellisuus siis mielletään ominaisuutena
                    femininiiniseksi, ja paikoittain negatiiviseksi. Kuitenkin
                    todellisen elämän satuprinssit ja sankarit ovat niitä, jotka
                    kykenevät raivoamatta kertomaan, mikä tänään ärsytti ja
                    miksi.
                </p>
            </div>
            <div className="relative m-8 lg:m-20">
                <Note>
                    <p className="text-dragon-purple">
                        Silti yli 58% miehistä kokee painetta olla
                        emotionaalisesti vahva
                    </p>
                </Note>
                <div>
                    <img src={Pilar} alt="pilar chart" />
                </div>
            </div>
            <div className="m-8 lg:m-20">
                <div className="mt-4 flex flex-col items-center justify-center">
                    <h2 className="mb-8 text-center text-4xl md:text-5xl">
                        Me kuuntelemme
                    </h2>
                    <Link to="/blog" className={buttonStyle}>
                        Tule juttelemaan
                    </Link>
                </div>
            </div>
            <div className="m-8 lg:m-20">
                <div className="mt-4 flex flex-col items-center justify-center">
                    <h2 className="text-center text-4xl md:text-5xl">
                        Palkitse sisäinen pikkuprinssisi
                    </h2>
                    <p className="my-8 text-center text-lg md:text-3xl">
                        Opi puhumaan tunteista
                    </p>
                    <Link to="/blog" className={buttonStyle}>
                        Lue lisää
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
