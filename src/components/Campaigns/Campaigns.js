import { Col, Container, Row } from "react-bootstrap";
import "./Campaigns.scss";
import Campaign from "./Campaign/Campaign";

const campaigns = [
	{
		url: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/poshan.jpeg?alt=media&token=ce9301ca-4cd2-4c88-893e-e136dffee051",
		name: "पोषण",
		desc: "स्वस्थ भारत की बुनियाद",
	},
	{
		url: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/jagriti.jpeg?alt=media&token=656c9e4f-ff06-491f-8a9c-761c4250db6f",
		name: "जागृति",
		desc: "एक पहल शिक्षा के लिए",
	},
];

function Campaigns() {
	const renderCampaings = () => {
		return campaigns.map((item) => {
			return (
				<Col className="camp-col">
					<Campaign item={item} />
				</Col>
			);
		});
	};

	return (
		<div className="campaigns-container">
			<Container>
				<Row>
					<h3>Our Campaigns</h3>
					<Row>{renderCampaings()}</Row>
				</Row>
			</Container>
		</div>
	);
}
export default Campaigns;
