import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

const Blog = () => {
	return (
		<>
			<Header />
			<body>
			  <p>Blogi sivu!</p>
			  <div className="grid grid-cols-3 gap-8 m-12">
				<div className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 bg-happy-yellow rounded-lg p-8 border-2 border-dragon-purple">
					<h1 className="text-3xl">Otsikko</h1>
					<p>Tunteiden ilmaisu ja ymmärtäminen voimavarana</p>
				</div>
				<div className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 bg-happy-yellow rounded-lg p-8 border-2 border-dragon-purple">
				    <h1 className="text-3xl">Otsikko</h1>
					<p>Kasvaminen miehen ahtaassa muotissa - ikuiset jäljet?</p>
				</div>
				<div className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 bg-happy-yellow rounded-lg p-8 border-2 border-dragon-purple">
				    <h1 className="text-3xl">Otsikko</h1>
					<p>teksti3</p>
				</div>
				<div className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 bg-happy-yellow rounded-lg p-8 border-2 border-dragon-purple">
				    <h1 className="text-3xl">Otsikko</h1>
					<p>teksti3</p>
				</div>
			  </div>
			</body>
			
			<Footer/>
		</>
	);
};

export default Blog;
