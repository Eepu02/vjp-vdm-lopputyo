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
                <p>Blogi sivu!</p>
                <div className="m-12 grid grid-cols-3 gap-8 mb-52">
                    <div className="transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600"
                         onClick={() => scroll(blogi1)}>
                        <h1 className="text-3xl">Otsikko</h1>
                        <p>Tunteiden ilmaisu ja ymmärtäminen voimavarana</p>
                    </div>
                    <div className="transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600"
                         onClick={() => scroll(blogi2)}>
                        <h1 className="text-3xl">Otsikko</h1>
                        <p>
                            Kasvaminen miehen ahtaassa muotissa - ikuiset
                            jäljet?
                        </p>
                    </div>
                    <div className="transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                        <h1 className="text-3xl">Otsikko</h1>
                        <p>teksti3</p>
                    </div>
                    <div className="transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                        <h1 className="text-3xl">Otsikko</h1>
                        <p>teksti3</p>
                    </div>
                </div>

                <div className="flex flex-col mx-64 mb-64"> 
 			       <h1 ref={blogi1} className = "text-6xl w-30 pt-24" >Tunteiden ilmaisu ja ymmärtäminen voimavarana</h1>
 			       <p className = "text-xl w-30 pt-20" >lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum</p>
                    <h1 ref={blogi2} className = "text-6xl w-30 pt-24" >Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?</h1>
 			       <p className = "text-xl w-30 pt-20" >lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum</p>
 			    </div>
            </body>
        </Layout>
    );
};

export default Blog;
