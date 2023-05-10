import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-candyfloss-purple rounded-b-lg">
		  <nav>
			  <div className="flex justify-evenly p-8">
			    <Link to="/">
			    <p className="text-dragon-purple text-base lg:text-3xl hover:text-happy-yellow">Etusivulle!</p></Link>
			    <Link to="/chat">
			    <p className="text-dragon-purple text-base lg:text-3xl hover:text-happy-yellow">Chat</p></Link>
			    <Link to="/blog">
		        <p className="text-dragon-purple text-base lg:text-3xl hover:text-happy-yellow">Blogi</p></Link>
			  </div>
		  </nav>
		</div>

	); 
};

export default Header;
