import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Man from "../assets/photos/man.png";


const Home = () => {
	return (
		<>
			<Header />

			<div className = "flex justify-between w-full">
				<div className = "flex-col pl-24" >
					<h1 className = "text-6xl w-30 pt-24" >Tunteet ovat sokeita sukupuolelle</h1>
					<div className = "text-3xl w-30 pt-20" >lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum lorem lipsum blaa blaa blaa lorem lipum</div>
				</div> 
				<img className="w-1/2" src = {Man} alt = "man" />
			</div>
			<button className="transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 absolute bottom-0 right-0  shadow-2xl p-6 mr-10 mt-10 rounded-lg p-8 border-2 border-dragon-purple bg-happy-yellow">			
			  <Link to="/chat">
				<p className="text-base lg:text-2xl text-dragon-purple">Miltä tuntuu?</p>
			  </Link>
			</button>
			<button className="ml-12 mt-10 transition duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 bg-happy-yellow rounded-lg p-8 border-2 border-dragon-purple">
			  <Link to="/blog">
				<p className="text-base lg:text-2xl text-dragon-purple">Lue lisää!</p>
			  </Link>

			</button>
			<Footer/>
			
		</>
	);
};

export default Home;
