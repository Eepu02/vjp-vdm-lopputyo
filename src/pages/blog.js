import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Blog = () => {
    return (
        <>
            <Header />
            <body>
                <p>Blogi sivu!</p>
                <div className="m-12 grid grid-cols-3 gap-8">
                    <div className="transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
                        <h1 className="text-3xl">Otsikko</h1>
                        <p>Tunteiden ilmaisu ja ymmärtäminen voimavarana</p>
                    </div>
                    <div className="transform rounded-lg border-2 border-dragon-purple bg-blue-600 bg-happy-yellow p-8 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-red-600">
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
            </body>

            <Footer />
        </>
    );
};

export default Blog;
