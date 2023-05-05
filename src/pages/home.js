import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Man from "../assets/photos/man.png";

const Home = () => {
	return (
		<>
			<Header />
			<Link to="/chat">
				<p className="text-base lg:text-2xl bg-purple-700">Moi!</p>;
			</Link>
			<div className = "flex justify-between">
				<p className = "object-right" ></p> 
				<img className="w-1/2" src = {Man} alt = "man" />;
			</div>
			
		</>
	);
};

export default Home;
