import React from "react";
import Header from "../components/header.js";
import ChatWindow from "../components/chat/ChatWindow";
// import handle from "../../server/utils/openai";

const Chat = () => {
    // handle();
    // const [data, setData] = React.useState(null);

    // React.useEffect(() => {
    //     fetch("/api")
    //         .then((res) => res.json())
    //         .then((data) => setData(data.message));
    // }, []);
    return (
        <>
            <Header />
            <p>Chat sivu!</p>
            <ChatWindow />
            <p>Alla pitäis olla juttuja</p>
            {/* <p>{!data ? "Loading..." : data}</p> */}
        </>
    );
};

export default Chat;
