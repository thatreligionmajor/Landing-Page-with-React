import React from "react";
import Navbar from "./navbar.jsx";
import Button from "./button.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Row from "./row.jsx";
import Footer from "./footer.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<Row />
			<Footer />
		</div>
	);
};

export default Home;
