import React, { useEffect, useState } from "react";
import ChatBubble from "./ChatBubble.jsx";

const ChatWindow = () => {
    // Ideally, the messages would be saved in a database.
    // But we have no need for that and besides, it would
    // increase complexity quite a bit
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false); // Disable input during fetching

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messages),
            });
            const result = await response.json();
            if (result && result.status === "ok") {
                setMessages([...messages, result.message]);
            }
            setLoading(false);
        };

        // Do not run if the latest message is from the server
        // (will cause an infinite loop)
        const latestMessage = messages.slice(-1)[0];
        if (latestMessage && latestMessage.role === "user") fetchData();
    }, [messages]);

    const addMessage = async (e) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);
        const message = formData.get("content");
        setMessages([
            ...messages,
            {
                role: "user",
                content: message,
            },
        ]);
    };

    // const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);

    return (
        <div className="flex-col w-96 p-8">
            <div>
                {messages.map((message, i) => (
                    <ChatBubble
                        key={i}
                        role={message.role}
                        content={message.content}
                    />
                ))}
            </div>
            <form onSubmit={addMessage}>
                <label htmlFor="writemessage">Kirjoita viesti</label>
                <input
                    type="text"
                    name="content"
                    id="writemessage"
                    disabled={loading}
                />
                <input
                    type="submit"
                    value="Lähetä"
                    disabled={loading}
                    className="bg-dragon-purple text-white"
                />
            </form>
        </div>
    );
};

export default ChatWindow;
