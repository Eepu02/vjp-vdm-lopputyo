import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="nav-bar bg-candyfloss-purple ">
		  <nav>
			  <div className="flex justify-evenly p-6 relative">
			    <Link to="/">
			    <p className="text-white font-josefin  text-base lg:text-3xl hover:text-happy-yellow">Etusivulle!</p></Link>
			    <Link to="/chat">
			    <p className="text-white font-josefin text-base lg:text-3xl hover:text-happy-yellow">Chat</p></Link>
			    <Link to="/blog">
		        <p className="text-white text-base font-josefin lg:text-3xl hover:text-happy-yellow">Blogi</p></Link>
				
			  </div>
		  </nav>
		</div>

	); 
};

export default Header;
