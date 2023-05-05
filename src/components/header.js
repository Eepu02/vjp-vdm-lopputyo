import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="bg-red">
			<div className="flex justify-around">
			  <Link to="/">
			  <p className="text-base lg:text-2xl bg-purple-700">Kotisivulle!</p></Link>
			  <Link to="/chat">
			  <p className="text-base lg:text-2xl bg-purple-700"></p>Chat</Link>
			  <Link to="/blog">
		      <p className="text-base lg:text-2xl bg-purple-700"></p>Blogi</Link>
			</div>
		</nav>

	); 
};

export default Header;
