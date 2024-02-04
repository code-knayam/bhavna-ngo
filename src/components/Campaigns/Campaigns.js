import { Col, Container, Row } from "react-bootstrap";
import "./Campaigns.scss";
import Campaign from "./Campaign/Campaign";

function Campaigns() {
	return (
		<div className="campaigns-container">
			<Container>
				<Row>
					<h3>Our Campaigns</h3>
					<Row>
						<Col lg={4} className="camp-col">
							<Campaign />
						</Col>
						<Col lg={4} className="camp-col">
							<Campaign />
						</Col>
						<Col lg={4} className="camp-col">
							<Campaign />
						</Col>
						<Col lg={4} className="camp-col">
							<Campaign />
						</Col>
					</Row>
				</Row>
			</Container>
		</div>
	);
}
export default Campaigns;
