import { Card } from "react-bootstrap";
import "./Campaign.scss";

function Campaign() {
	return (
		<div className="campaign-container">
			<Card className="shadow">
				<Card.Img variant="top" src="https://picsum.photos/900/500" />
				<Card.Body>
					<Card.Title>Card Title</Card.Title>
					<Card.Text>
						Some quick example text to build on the card title and make up the
						bulk of the card's content. Some quick example text to build on the
						card title and make up the bulk of the card's content.
					</Card.Text>
				</Card.Body>
			</Card>
		</div>
	);
}

export default Campaign;
