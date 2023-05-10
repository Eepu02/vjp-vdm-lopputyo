import React from "react";
import Layout from "../components/layouts/layout";
import { useRef } from "react";

const Blog = () => {
    const blogi1 = useRef();
    const blogi2 = useRef();
    const scroll = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"

        })
    }



        return (
        <Layout>
            <body>
                <div className="bg-zinc-300">
                    <div className="pt-60 flex flex-col justify-center items-center">
                        <p className="text-dragon-purple font-josefin text-5xl">
                            Itkevä Mies 
                        </p>
                        <p className="text-dragon-purple font-urbanist text-2xl">
                            - Miehistä Miehisin
                        </p>
                        <p className="font-urbanist text-dragon-purple text-4xl pt-40">
                            Viimeisimmät julkaisut
                        </p>
                    </div>

                    <div className="flex flex-col lg: m-12 grid grid-cols-3 gap-8 mb-52">
                        <div className=" flex tall-box transform rounded-lg  border-2 border-white shadow bg-gradient-to-r bg-sad-purple p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-col items-center justify-center"
                            onClick={() => scroll(blogi1)}>
                            <h1 className="text-2xl text-white font-josefin">Tunteiden ilmaisu ja ymmärtäminen voimavarana</h1>
                            <p></p>
                        </div>
                        <div className=" tall-box transform rounded-lg border-2 border-white bg-sad-purple p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-col items-center justify-center"
                            onClick={() => scroll(blogi2)}>
                            <h1 className="text-2xl text-white font-josefin">Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?</h1>
                            <p>
                            
                            </p>
                        </div>
                        <div className="tall-box transform rounded-lg  border-2 border-white bg-sad-purple p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-col items-center justify-center">
                            <h1 className="text-2xl text-white font-josefin">Otsikko 3</h1>
                            <p></p>
                        </div>
                        <div className=" tall-box transform rounded-lg border-2 border-white bg-sad-purple transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 flex flex-col items-center justify-center">
                            <h1 className="text-2xl text-white font-josefin">Otsikko 4</h1>
                            <p></p>
                        </div>
                    </div>

                    <div className="flex flex-col mx-64 mb-64"> 
                    <h1 ref={blogi1} className = "text-6xl w-30 pt-24" >Tunteiden ilmaisu ja ymmärtäminen voimavarana</h1>
                    <p className = "text-xl w-30 pt-20" >lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum</p>
                        <h1 ref={blogi2} className = "text-6xl w-30 pt-24" >Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?</h1>
                    <p className = "text-xl w-30 pt-20" >lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum</p>
                    </div>
                </div>
            </body>
        </Layout>
    );
};

export default Blog;
