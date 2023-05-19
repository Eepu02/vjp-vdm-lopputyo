import React from "react";

const BlogCard = ({ heading, clickHandler, color }) => {
    return (
        <div
            onClick={clickHandler}
            style={{ background: color }}
            className=" tall-box flex flex transform flex-col items-center justify-center rounded-lg border-2 border-white  bg-gradient-to-r p-8 shadow transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-105"
        >
            <h2 className="font-josefin text-2xl text-white">{heading}</h2>
        </div>
    );
};

export default BlogCard;
