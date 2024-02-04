import { Col, Container, Row } from "react-bootstrap";
import "./Mission.scss";

function Mission() {
	return (
		<div className="mission-container">
			<Container>
				<Row>
					<h3>Our Mission</h3>
					<p>
						To work for the under priviledged creating a society which
						recognized the right of all to live with honour and dignity.
						<br></br>Transforming individual potential into collective drive for
						change.
					</p>
				</Row>
				<Row>
					<h3>Our Vision</h3>
					<p>
						Providing a better tomorrow, a promising future and building a
						society with heart full of love and hands ready to help.
					</p>
				</Row>
				<Row>
					<h3>Our Values</h3>
					<Col className="value-container">
						<ul>
							<li>Dedication</li>
							<li>Transparency</li>
							<li>Love for the cause</li>
						</ul>
					</Col>
					<Col className="value-container">
						<ul>
							<li>Integrity</li>
							<li>Effciency</li>
							<li>Effectiveness</li>
						</ul>
					</Col>
				</Row>
				<Row className="missions">
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-book"></i>
						</span>
						<p className="heading">Jagriti</p>
						<p>Eradicating literacy and making children self sufficient</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-droplet"></i>
						</span>
						<p className="heading">Raktanjali</p>
						<p>Organizing blood donation and promoting awareness</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-globe-central-south-asia"></i>
						</span>
						<p className="heading">Green Citizens</p>
						<p>Protecting and conserving our environment</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-prescription2"></i>
						</span>
						<p className="heading">Swastha Bharat</p>
						<p>
							Promoting health awareness and conducting medical checkup camps
						</p>
					</Col>

					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-bandaid"></i>
						</span>
						<p className="heading">Rahat</p>
						<p>To provide financial/material aid to natural disaster victims</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Mission;
