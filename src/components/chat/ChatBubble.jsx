import React from "react";

const ChatBubble = ({ content, role }) => {
    const style =
        role === "user" ? "bg-dragon-purple ml-8" : "mr-8 bg-candyfloss-purple";

    return (
        <div className={["rounded-lg p-2 my-4", style].join(" ")}>
            <p>{content}</p>
        </div>
    );
};

export default ChatBubble;
