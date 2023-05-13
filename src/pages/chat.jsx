import React from "react";
import Layout from "../components/layouts/layout";
import ChatWindow from "../components/chat/chatWindow";
import { Link } from "react-router-dom";

const Chat = () => {
    return (
        <Layout>
            <div className="m-auto max-w-[80ch]">
                <div className="p-8">
                    <p>
                        Kiva että tulit juttelemaan! Täällä pääset juttelemaan
                        tekoälyn kanssa. Voit puhuu mistä tahansa, emme tallenna
                        keskustelujasi. Oothan meihin yhteydessä, jos tarviit
                        tukea! Voit halutessasi tutustua ulkoisen
                        palveluntarjoajan{" "}
                        <Link
                            className="underline"
                            to="https://openai.com/policies/api-data-usage-policies"
                        >
                            tietosuojaselosteeseen
                        </Link>
                        .
                    </p>
                </div>
                <ChatWindow />
            </div>
        </Layout>
    );
};

export default Chat;
