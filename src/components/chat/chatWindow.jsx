import React, { useEffect, useRef, useState } from "react";
import ChatBubble from "./chatBubble";

const ChatWindow = ({ handlePin }) => {
    // Ideally, the messages would be saved in a database.
    // But we have no need for that and besides, it would
    // increase complexity quite a bit
    const [messages, setMessages] = useState([]); // Store messages
    const [enteredText, setEnteredText] = useState(""); // Keep track of what's being typed
    const [loading, setLoading] = useState(false); // Disable input during fetching
    const inputReference = useRef(null); // Store the input field for auto focus
    const container = useRef(null); // Store the container for scrolling

    // Auto focus onto the input field
    useEffect(() => {
        inputReference.current.focus();
    });

    // Handles responses to user messages
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
                // Using finally so the input is unfreezed even if there's an error
                setLoading(false);
            }
        };

        // Do not run if the latest message is from the server
        // (will cause an infinite loop)
        const latestMessage = messages.slice(-1)[0];
        if (latestMessage && latestMessage.role === "user") fetchData();
    }, [messages]);

    // Calculates new scroll position and scroll the chat window
    const Scroll = () => {
        const { offsetHeight, scrollHeight, scrollTop } = container.current;
        if (scrollHeight <= scrollTop + offsetHeight + 100) {
            container.current?.scrollTo({
                top: scrollHeight,
                behavior: "smooth",
            });
        }
    };

    // Scroll when new messages are added
    useEffect(() => {
        Scroll();
    }, [messages]);

    const addMessage = async (e) => {
        // Prevent the default action (for a HTML form that'd be a POST request)
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
        <div className="relative m-8 grid h-screen grid-rows-[1fr_200px]">
            <div ref={container} className="h-full overflow-y-scroll px-4">
                {messages.map((message, i) => (
                    <ChatBubble
                        key={i}
                        role={message.role}
                        content={message.content}
                        pinMessage={handlePin}
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
                    value={
                        loading ? "Odota, muodostan vastausta..." : enteredText
                    }
                    onChange={(e) => setEnteredText(e.target.value)}
                    ref={inputReference}
                    className="min-w-0 border-2 border-dragon-purple bg-candyfloss-purple p-2 focus:outline-none disabled:text-dragon-purple"
                />
                <input
                    type="submit"
                    value="Lähetä"
                    disabled={loading}
                    className="text-white- bg-dragon-purple"
                />
            </form>
        </div>
    );
};

export default ChatWindow;
