import { Card } from "react-bootstrap";
import "./Campaign.scss";

function Campaign({ item }) {
	return (
		<div className="campaign-container">
			<Card className="shadow">
				<Card.Img variant="top" src={item.url} />
				<Card.Body>
					<Card.Title>{item.name}</Card.Title>
					<Card.Text>{item.desc}</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Campaign;
