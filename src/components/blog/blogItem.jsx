import React from "react";

const BlogItem = ({ element, heading, text }) => {
    return (
        <div ref={element}>
            <h2 className="pt-24 font-urbanist text-5xl">{heading}</h2>
            <p className="pt-20 font-roboto text-xl">{text}</p>
        </div>
    );
};

export default BlogItem;
