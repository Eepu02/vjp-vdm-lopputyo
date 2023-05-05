import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";

const Home = () => {
	return (
		<>
			<Header />
			<Link to="/chat">
				<p>Moi!</p>;
			</Link>
		</>
	);
};

export default Home;
