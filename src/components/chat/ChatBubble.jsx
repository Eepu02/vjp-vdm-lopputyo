import React from "react"

const ChatBubble = ({ content, role }) => {
    const style = switch (role) {
        
    } ? "bg-sad-purple" : "bg-candyfloss-purple"

    return (
        <div className={["rounded", style].join(" ")}>
            <p>{message}</p>
        </div>
    )
}

export default ChatBubble;