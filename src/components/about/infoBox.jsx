import React from "react";

const infoBox = ({ element, heading, text }) => {
    return (
        <div ref={element}>
            <h2 className="pt-24 font-josefin text-3xl">{heading}</h2>
            <p className="pt-20 font-roboto text-sm">{text}</p>
        </div>
    );
};

export default infoBox;