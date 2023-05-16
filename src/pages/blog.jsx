import React, { useRef } from "react";
import Layout from "../components/layouts/layout";
import Cover from "../assets/photos/AdobeStock_50pct.webp";
import BlogItem from "../components/blog/blogItem";
import BlogCard from "../components/blog/blogCard";

const Blog = () => {
    const blogi1 = useRef();
    const blogi2 = useRef();
    const scroll = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    return (
        <Layout>
            <div className="relative bg-zinc-300">
                <div className=" flex flex-col items-center justify-center">
                    <hr className="custom-line " />
                    <img src={Cover} alt="blog-background" />
                    <hr className="custom-line my" />
                    <div className="left-20 top-0 flex h-full w-full flex-col items-center justify-center">
                        <p className=" pd-4 font-josefin text-5xl font-bold text-happy-yellow">
                            Itkevä Mies
                        </p>
                        <div className=" transform rounded-lg bg-gray-200 pl-2 pr-2">
                            <p className="font-urbanist text-2xl text-dragon-purple">
                                - Miehistä Miehisin
                            </p>
                        </div>
                    </div>

                    <p className="pt-40  font-urbanist text-4xl">
                        Viimeisimmät julkaisut
                    </p>
                    <hr className="yellow-line my-12" />
                </div>

                <div className="m-6 space-y-6 lg:space-y-0 flex flex-col lg:m-12 lg:mb-52 lg:grid grid-cols-3 lg:gap-8">
                    <BlogCard
                        heading="Tunteiden ilmaisu ja ymmärtäminen voimavarana"
                        clickHandler={() => scroll(blogi1)}
                    />
                    <BlogCard
                        heading="Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?"
                        clickHandler={() => scroll(blogi2)}
                    />
                    <BlogCard
                        heading="Otsikko"
                        />
                    <BlogCard
                        heading="Otsikko"
                        />
                </div>

                <div className="flex flex-col mx-12 mb-12 lg:mx-64 lg:mb-64">
                    <BlogItem
                        element={blogi1}
                        heading="Tunteiden ilmaisu ja ymmärtäminen voimavarana"
                        text="Tunteet ovat olennainen osa ihmisen elämää. Ne voivat olla voimakkaita ja monimutkaisia, mutta niiden ilmaiseminen ja ymmärtäminen voi olla suuri voimavara henkilökohtaisessa kasvussa ja hyvinvoinnissa. Usein tunteiden kohtaaminen ja niiden käsittely voi olla haastavaa, mutta kun oppii ilmaisemaan ja ymmärtämään tunteitaan, se voi avata ovia syvempään itsetuntemukseen ja parempaan vuorovaikutukseen muiden ihmisten kanssa.

                        Ensinnäkin, tunteiden ilmaiseminen on tapa kertoa omista sisäisistä kokemuksistaan. Se voi olla merkittävä väline kommunikoida toisille ihmisille, mitä meissä tapahtuu ja mitä tarvitsemme. Ilmaistessamme tunteitamme avoimesti ja rehellisesti annamme itsellemme luvan tulla nähdyksi ja kuulluksi sellaisina kuin olemme. Se luo mahdollisuuden syvemmälle yhteydelle toisiin ihmisiin ja voi vahvistaa ihmissuhteita.
                        
                        Toiseksi, tunteiden ymmärtäminen on avainasemassa oman hyvinvoinnin kannalta. Tunteet voivat olla viestejä siitä, mitä tarvitsemme tai mitä arvostamme elämässämme. Jos emme ole tietoisia omista tunteistamme, voimme ohittaa nämä viestit ja menettää yhteyden itseemme. Ymmärtämällä tunteitamme voimme oppia tunnistamaan, mitkä asiat tuottavat meille iloa, mitkä asiat aiheuttavat meille stressiä tai mitkä asiat ravitsevat meitä henkisesti. Tämä tietoisuus auttaa meitä tekemään parempia valintoja elämässä ja lisäämään omaa hyvinvointiamme.
                        
                        On tärkeää muistaa, että tunteiden ilmaiseminen ja ymmärtäminen eivät tarkoita niiden kontrollointia tai poistamista. Tunteet eivät ole hyviä tai huonoja, ne ovat osa ihmisen kokonaisuutta. Ne voivat tuoda mukanaan sekä iloa että haasteita, mutta niiden kohtaaminen ja käsittely auttaa meitä kasvamaan ja kehittymään.
                        
                        Joten miten voimme harjoittaa tunteiden ilmaisemista ja ymmärtämistä voimavarana? Ensinnäkin, itsensä tunteminen on avainasemassa. Voimme pysähtyä hetkeksi ja tarkkailla omia tunteitamme ja kehon reaktioita. Tämä voi sisältää esimerkiksi meditaatiota, päiväkirjan kirjoittamista tai terapeuttisia harjoituksia, jotka auttavat meitä syventämään yhteyttä omaan sisäiseen maailmaamme."
                    />
                    <BlogItem
                        element={blogi2}
                        heading="Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?"
                        text="Yhteiskunnassa meillä on usein ennalta määritettyjä rooleja ja odotuksia, joita asetetaan sekä naisille että miehille. Erityisesti miesten kohdalla nämä rooliodotukset voivat olla erityisen tiukkoja ja ahtaita. Miehiltä odotetaan usein vahvuutta, rohkeutta, kykyä hillitä tunteitaan ja menestyä työelämässä. Tämä perinteinen miehen muotti voi aiheuttaa monenlaisia paineita ja rajoituksia miehen kasvulle ja kehitykselle.

                        Yksi suuri haaste tässä miehen muotissa on tunteiden ilmaisun rajoittaminen. Miehille on usein opetettu, että heidän tulisi olla vahvoja ja hillittyjä, eikä heidän tulisi näyttää heikkoutta tai haavoittuvuutta. Tämä voi johtaa siihen, että miehet tukahduttavat omia tunteitaan, mikä voi olla haitallista niin fyysiselle kuin psyykkisellekin terveydelle. Tunteiden tukahduttaminen voi johtaa stressiin, ahdistukseen ja vaikeuksiin muodostaa syvällisiä ihmissuhteita.
                        
                        Toinen merkittävä haaste on miehen rooli työelämässä. Miehiltä odotetaan usein menestystä ja kunnianhimoa urallaan. Heidän odotetaan olevan kovia työntekijöitä, jotka eivät valita tai osoita heikkoutta. Tämä voi johtaa työuupumukseen ja epätasapainoon työn ja muun elämän välillä. Miehet voivat myös joutua kokemaan paineita perheen elättämisestä ja roolistaan perheen päämiehenä, mikä voi olla stressaavaa ja rajoittavaa.
                        
                        On tärkeää ymmärtää, että miehen muotti ei ole luonnollinen tai välttämätön. Kasvaminen miehenä ei tarkoita, että pitäisi sulautua tiukkoihin rooliodotuksiin. Jokainen mies on yksilöllinen omilla tunteillaan, tarpeillaan ja unelmillaan. Miehet voivat kasvaa ja kehittyä parhaiten silloin, kun he voivat ilmaista itseään vapaasti ja elää omien arvojensa mukaisesti.
                        
                        Miehen ahtaan muotin rikkomiseen liittyy tärkeää työtä itsetuntemuksen ja omien tunteiden tutkimisen parissa. Tunteiden salliminen ja ilmaiseminen ei ole heikkoutta, vaan rohkeutta. Miehen on tärkeää oppia tunnistamaan omat tunteensa ja tarpeensa sekä löytää terveitä tapoja niiden ilmaisemiseen. Tämä voi sisältää avoimen keskustelun läheisten ihmisten kanssa, terapian tai vertaistuen hakemisen. Tunteiden hyväksyminen ja niiden ilmaiseminen auttaa miestä ymmärtämään itseään paremmin ja rakentamaan syvempiä ja merkityksellisempiä ihmissuhteita."
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
