import Container from "react-bootstrap/Container";
import "./Home.scss";
import Button from "react-bootstrap/Button";

function Home() {
	return (
		<div className="home">
			<Container className="container">
				<Button className="shadow-lg">Explore our Work</Button>
				<p className="heading">
					A group of friends driven by a desire to serve the society and making
					it a better place to live for all
				</p>
			</Container>
		</div>
	);
}

export default Home;
