import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import "./Home.scss";
import Button from "react-bootstrap/Button";

function Home() {
	return (
		<div className="home">
			<Container className="container">
				<Col lg={6}>
					<p className="heading">
						Discover what our foundation does with its influence
					</p>
					<Button>Explore our Work</Button>
				</Col>
				<Col>
					<Image src="holder.js/171x180" rounded />
				</Col>
			</Container>
		</div>
	);
}

export default Home;
