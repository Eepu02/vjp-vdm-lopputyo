import React from "react";
import Layout from "../components/layouts/layout";
import { useRef } from "react";
import Cover from "../assets/photos/AdobeStock.jpeg";
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
            <div className="bg-zinc-300">
                <div className=" flex flex-col items-center justify-center">
                    <hr className="custom-line " />
                    <img src={Cover} alt="blog-background" />
                    <hr className="custom-line my" />
                    <div className="absolute left-20 top-0 flex h-full w-full flex-col items-center justify-center">
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

                <div className="lg: m-12 mb-52 flex grid grid-cols-3 flex-col gap-8 pt-24">
                    <BlogCard
                        heading="Tunteiden ilmaisu ja ymmärtäminen voimavarana"
                        clickHandler={() => scroll(blogi1)}
                    />
                    <BlogCard
                        heading="Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?"
                        clickHandler={() => scroll(blogi2)}
                    />
                    <BlogCard heading="Otsikko 3" />
                    <BlogCard heading="Otsikko 4" />
                </div>

                <div className="mx-64 mb-64 flex flex-col">
                    <BlogItem
                        element={blogi1}
                        heading="Tunteiden ilmaisu ja ymmärtäminen voimavarana"
                        text="lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum"
                    />
                    <BlogItem
                        element={blogi2}
                        heading="Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?"
                        text="lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum
                        lorem lipsum blaa blaa blaa lorem lipum lorem lipsum
                        blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa
                        lorem lipum lorem lipsum blaa blaa blaa lorem lipum"
                    />
                </div>
            </div>
        </Layout>
    );
};

export default Blog;
