import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Blog from "./pages/blog";

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
