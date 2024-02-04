import { Col, Container, Row } from "react-bootstrap";
import "./Mission.scss";

function Mission() {
	return (
		<div className="mission-container">
			<Container>
				<Row className="ngo-misssion">
					<h3>Our Mission</h3>
					<p>
						To work for the under priviledged creating a society which
						recognized the right of all to live with honour and dignity.
						<br></br>Transforming individual potential into collective drive for
						change.
					</p>
				</Row>
				<Row className="ngo-misssion">
					<h3>Our Vision</h3>
					<p>
						Providing a better tomorrow, a promising future and building a
						society with heart full of love and hands ready to help.
					</p>
				</Row>
				<Row className="ngo-misssion">
					<h3>Our Values</h3>
					<Col>
						<div className="value-container">
							<span>Dedication</span>
							<span>Transparency</span>
							<span>Love for the cause</span>
							<span>Integrity</span>
							<span>Effciency</span>
							<span>Effectiveness</span>
						</div>
					</Col>
				</Row>
				<Row className="missions">
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-book"></i>
						</span>
						<p className="heading">Jagriti</p>
						<p className="info">
							Eradicating literacy and making children self sufficient
						</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-droplet"></i>
						</span>
						<p className="heading">Raktanjali</p>
						<p className="info">
							Organizing blood donation and promoting awareness
						</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-globe-central-south-asia"></i>
						</span>
						<p className="heading">Green Citizens</p>
						<p className="info">Protecting and conserving our environment</p>
					</Col>
					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-prescription2"></i>
						</span>
						<p className="heading">Swastha Bharat</p>
						<p className="info">
							Promoting health awareness and conducting medical checkup camps
						</p>
					</Col>

					<Col className="mission">
						<span className="icon shadow">
							<i class="bi bi-bandaid"></i>
						</span>
						<p className="heading">Rahat</p>
						<p className="info">
							To provide financial/material aid to natural disaster victims
						</p>
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Mission;
