import React from "react";

const BlogItem = ({ element, heading, text }) => {
    return (
        <div ref={element}>
            <h2 className="text-3xl lg:pt-24 font-urbanist lg:text-5xl">{heading}</h2>
            <p className="mb-6 pt-20 font-roboto lg:text-xl">{text}</p>
        </div>
    );
};

export default BlogItem;
