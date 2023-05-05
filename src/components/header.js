import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<nav className="bg-red-700">
			<Link to="/">Kotisivulle</Link>
		</nav>
	);
};

export default Header;
