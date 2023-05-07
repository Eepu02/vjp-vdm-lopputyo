import React from "react";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Blog = () => {
	return (
		<>
			<Header />
			<p>Blogi sivu!</p>
			<div className="grid grid-cols-2 justify-items-center gap-12 m-12">
			  <Link to="/blogtext">
			  <div className="w-52 h-64 bg-dragon-purple flex items-center justify-center rounded-3xl p-4 ">Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?</div></Link>
			  <div className="w-52 h-64 bg-happy-yellow flex items-center justify-center rounded-3xl p-4 ">Tunteiden ilmaisu ja ymmärtäminen voimavarana</div>
			  <div className="w-52 h-64 bg-happy-yellow flex items-center justify-center rounded-3xl "></div>
			  <div className="w-52 h-64 bg-dragon-purple rounded-3xl "></div>
			  <div className="w-52 h-64 bg-happy-yellow rounded-3xl "></div>
			  <div className="w-52 h-64 bg-happy-yellow rounded-3xl "></div>
			</div>
		
		</>
	);
};

export default Blog;
