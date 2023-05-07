import React, { useState } from "react";
import ChatBubble from "./ChatBubble.jsx";

const ChatWindow = () => {
    // Ideally, the messages would be saved in a database.
    // But we have no need for that and besides, it would
    // increase complexity quite a bit
    const [messages, newMessage] = useState([]);

    const addMessage = async (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const message = formData.get("message");
        console.log(formData.get("message"));
        const formJson = Object.fromEntries(formData.entries());
        console.log(JSON.stringify(formJson));
        newMessage([
            ...messages,
            {
                role: "user",
                message: message,
            },
        ]);
        // const response = await fetch("/api", {
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: '{"message":"some fucking message"}',
        //     // body: JSON.stringify(formJson),
        // });
        const response = await fetch("/api", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(messages),
        });
        // const content = await rawResponse.json();
        const result = await response.json();
        console.log("response from server: " + JSON.stringify(result));
    };

    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);

    return (
        <div className="flex-col">
            <div>
                {messages.map((message) => (
                    <ChatBubble
                        key={message.message}
                        fromUser={message.fromUser}
                        message={message.message}
                    />
                ))}
            </div>
            <form method="post" onSubmit={addMessage}>
                <label htmlFor="writemessage">Kirjoita viesti</label>
                <input type="text" name="message" id="writemessage" />
                <input
                    type="submit"
                    value="Lähetä"
                    className="bg-dragon-purple text-white"
                />
            </form>
            <p>{!data ? "Loading..." : data}</p>
        </div>
    );
};

export default ChatWindow;
