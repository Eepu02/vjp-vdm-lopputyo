import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-candyfloss-purple rounded-b-lg">
		  <nav>
			  <div className="flex justify-evenly p-5">
			    <Link to="/">
			    <p className="text-dragon-purple text-base lg:text-2xl">Kotisivulle!</p></Link>
			    <Link to="/chat">
			    <p className="text-dragon-purple text-base lg:text-2xl"></p>Chat</Link>
			    <Link to="/blog">
		        <p className="text-dragon-purple text-base lg:text-2xl"></p>Blogi</Link>
			  </div>
		  </nav>
		</div>

	); 
};

export default Header;
