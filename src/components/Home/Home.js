import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Home.scss";
import Button from "react-bootstrap/Button";

function Home() {
	return (
		<div className="home">
			<Container className="container">
				<Col>
					<p className="heading">
						A group of friends driven by a desire to serve the society and
						making it a better place to live for all
					</p>
					<Button className="shadow-lg">Explore our Work</Button>
				</Col>
			</Container>
		</div>
	);
}

export default Home;
