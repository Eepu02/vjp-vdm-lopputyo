import React from "react";
import pin from "../../assets/icons/pin.png";

const ChatBubble = ({ content, role, pinMessage }) => {
    const isUser = role === "user";

    const style = isUser
        ? "text-white bg-dragon-purple ml-8 rounded-br-none"
        : "mr-8 bg-candyfloss-purple rounded-bl-none";

    const buttonPos = isUser
        ? "-right-2 bg-candyfloss-purple"
        : "-right-2 bg-dragon-purple";

    const imgColor = isUser ? "invert-0" : "invert";

    return (
        <div
            className={["relative my-4 rounded-xl p-2 shadow-md", style].join(
                " "
            )}
        >
            <button
                className={[
                    "absolute -top-2 rounded-full p-2 transition-transform hover:scale-110",
                    buttonPos,
                ].join(" ")}
                onClick={() => pinMessage(content)}
            >
                <img
                    src={pin}
                    alt="pin"
                    className={["w-4", imgColor].join(" ")}
                />
            </button>
            <p>{content}</p>
        </div>
    );
};

export default ChatBubble;
