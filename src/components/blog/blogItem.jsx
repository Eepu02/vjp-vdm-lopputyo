import React from "react";

const BlogItem = ({ element, heading, text, color }) => {
    return (
        <div ref={element} className={`px-8 py-4 rounded-lg pt-8 mt-16 ${color}`}>
            <h2 className="text-3xl lg:pt-24 font-urbanist text-happy-yellow lg:text-5xl">{heading}</h2>
            <p className="mb-6 pt-20 font-roboto text-white lg:text-xl">{text}</p>
        </div>
    );
};


export default BlogItem;
