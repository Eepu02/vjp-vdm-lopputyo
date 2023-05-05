import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
	return (
		<Link to="/chat">
			<p>Moi!</p>;
		</Link>
	);
};

export default Home;
