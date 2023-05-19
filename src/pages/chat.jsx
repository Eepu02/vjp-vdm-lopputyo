import React, { useState } from "react";
import Layout from "../components/layouts/layout";
import ChatWindow from "../components/chat/chatWindow";
import { Link } from "react-router-dom";
import Note from "../components/common/note";

const Chat = () => {
    const handlePin = (message) => {
        setPinnedMessages([
            ...pinnedMessages,
            { identifier: crypto.randomUUID(), message: message },
        ]);
    };

    const [pinnedMessages, setPinnedMessages] = useState([
        {
            identifier: crypto.randomUUID(),
            message: (
                <p>
                    Kiva että tulit juttelemaan! Täällä pääset juttelemaan
                    tekoälyn kanssa. Voit puhuu mistä tahansa, emme tallenna
                    keskustelujasi. Oothan meihin yhteydessä, jos tarviit tukea!
                    Voit halutessasi tutustua ulkoisen palveluntarjoajan{" "}
                    <Link
                        className="underline"
                        to="https://openai.com/policies/api-data-usage-policies"
                    >
                        tietosuojaselosteeseen
                    </Link>
                    .
                </p>
            ),
        },
        {
            identifier: crypto.randomUUID(),
            message: <p>Voit kiinnittää parhaita viestejä tähän!</p>,
        },
    ]);

    // Thanks to the UUID we can remove specific notes even when multiple notes share the same message
    const handleNoteUnpin = (identifier) => {
        setPinnedMessages(
            pinnedMessages.filter((note) => note.identifier !== identifier)
        );
    };
    return (
        <Layout>
            <div className="grid grid-rows-[100vh_1fr] ml-8 mr-8 lg:grid-cols-[80ch_1fr] lg:grid-rows-none">
                <ChatWindow handlePin={handlePin} />
                {/* <div className="my-4 mr-4 h-full"> */}
                <div className="my-8 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-6">
                    {pinnedMessages.map((message) => {
                        return (
                            <Note
                                key={message.identifier}
                                identifier={message.identifier}
                                handleClose={handleNoteUnpin}
                            >
                                <p className="font-indieflower text-dragon-purple">
                                    {message.message}
                                </p>
                            </Note>
                        );
                    })}
                </div>
                {/* </div> */}
            </div>
        </Layout>
    );
};

export default Chat;
