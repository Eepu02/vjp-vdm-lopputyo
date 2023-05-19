import React from "react";

const infoBox = ({ element, heading, text }) => {
    return (
        <div ref={element}>
            <h2 className="pt-24 text-happy-yellow font-josefin text-3xl pt-8 border-t-2 border-dragon-purple mt-16">{heading}</h2>
            <p className="pt-20 font-roboto text-sm">{text}</p>
        </div>
    );
};

export default infoBox;