import { Col, Container, Row } from "react-bootstrap";
import "./Mission.scss";

function Mission() {
	return (
		<div className="mission-container">
			<Container>
				<Row>
					<h3>Our Mission</h3>
					<p>
						Provide support to underprivileged seciton of the society through
						quality education, nourishment & shelter.
					</p>
				</Row>
				<Row className="missions">
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-backpack2"></i>
						</span>
						<p className="heading">residence</p>
						<p>help children with residence</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-backpack2"></i>
						</span>
						<p className="heading">residence</p>
						<p>help children with residence</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-backpack2"></i>
						</span>
						<p className="heading">residence</p>
						<p>help children with residence</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-backpack2"></i>
						</span>
						<p className="heading">residence</p>
						<p>help children with residence</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Mission;
