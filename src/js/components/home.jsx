import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";
import Footer from "./footer.jsx"

const cards = [
	{
		image: "https://revistadelmaresme.com/wp-content/uploads/2023/08/home1.jpg",
		title: "Card title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		image: "https://revistadelmaresme.com/wp-content/uploads/2023/08/home1.jpg",
		title: "Card title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		image: "https://revistadelmaresme.com/wp-content/uploads/2023/08/home1.jpg",
		title: "Card title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},
	{
		image: "https://revistadelmaresme.com/wp-content/uploads/2023/08/home1.jpg",
		title: "Card title",
		description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
	},

];

//create your first component
const home = () => {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<div className="container mb-5">
				<div className="row">
					{cards.map((item, index) => (
						<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" key={index}>
							<Card cards={item} />
						</div>
					))}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default home;