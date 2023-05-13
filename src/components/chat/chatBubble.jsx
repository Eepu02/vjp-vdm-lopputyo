import React from "react";

const ChatBubble = ({ content, role }) => {
    const style =
        role === "user"
            ? "text-white bg-dragon-purple ml-8 rounded-br-none"
            : "mr-8 bg-candyfloss-purple rounded-bl-none";

    return (
        <div className={["my-4 rounded-xl p-2 shadow-md", style].join(" ")}>
            <p>{content}</p>
        </div>
    );
};

export default ChatBubble;
