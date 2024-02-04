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
						Discover what our foundation does with its influence
					</p>
					<Button className="shadow-lg">Explore our Work</Button>
				</Col>
			</Container>
		</div>
	);
}

export default Home;
