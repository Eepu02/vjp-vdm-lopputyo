import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Blog from "./pages/blog";
import About from "./pages/about";
import Test from "./pages/test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="chat" element={<Chat />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
                <Route path="test" element={<Test />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
