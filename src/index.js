import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Chat from "./pages/Chat.jsx";
import Blog from "./pages/blog.js";

console.log(process.env.REACT_APP_OPENAI_API_KEY);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="chat" element={<Chat />} />
                <Route path="blog" element={<Blog />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
