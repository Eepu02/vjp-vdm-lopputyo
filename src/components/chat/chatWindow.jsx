import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./chatBubble";

const ChatWindow = () => {
    // Ideally, the messages would be saved in a database.
    // But we have no need for that and besides, it would
    // increase complexity quite a bit
    const [messages, setMessages] = useState([]);
    const [enteredText, setEnteredText] = useState("");
    const [loading, setLoading] = useState(false); // Disable input during fetching
    const inputReference = useRef(null);
    const container = useRef(null);

    useEffect(() => {
        inputReference.current.focus();
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
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
            } catch (e) {
                console.log(e);
            } finally {
                setLoading(false);
            }
        };

        // Do not run if the latest message is from the server
        // (will cause an infinite loop)
        const latestMessage = messages.slice(-1)[0];
        if (latestMessage && latestMessage.role === "user") fetchData();
    }, [messages]);

    const Scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = container.current;
        if (scrollHeight <= scrollTop + offsetHeight + 100) {
            // container.current?.scrollTo(0, scrollHeight);
            container.current?.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        }
    };

    useEffect(() => {
        Scroll();
    }, [messages]);

    const addMessage = async (e) => {
        e.preventDefault();
        if (enteredText.length === 0) return;
        setLoading(true);
        setMessages([
            ...messages,
            {
                role: "user",
                content: enteredText,
            },
        ]);
        setEnteredText("");
    };

    return (
        <div className="relative m-auto grid h-[calc(100vh-64px)] grid-rows-[1fr_200px] p-8">
            <div ref={container} className="h-full overflow-y-scroll px-4">
                {messages.map((message, i) => (
                    <ChatBubble
                        key={i}
                        role={message.role}
                        content={message.content}
                    />
                ))}
            </div>
            <form
                onSubmit={addMessage}
                className="grid h-min grid-cols-[1fr_100px]"
            >
                <label className="col-span-2" htmlFor="writemessage">
                    Kirjoita viesti
                </label>
                <input
                    type="text"
                    name="content"
                    id="writemessage"
                    disabled={loading}
                    autoFocus
                    value={enteredText}
                    onChange={(e) => setEnteredText(e.target.value)}
                    ref={inputReference}
                    className="min-w-0 border border-0 bg-candyfloss-purple p-2 focus:outline-none"
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
