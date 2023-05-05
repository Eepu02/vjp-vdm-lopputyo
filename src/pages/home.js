import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

const Home = () => {
	return (
		<>
			<Header />
			<Link to="/chat">
				<p className="text-base lg:text-2xl text-sad-purple">Moi!</p>;
			</Link>
		</>
	);
};

export default Home;
