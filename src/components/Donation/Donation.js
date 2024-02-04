import { Button, Container } from "react-bootstrap";
import "./Donation.scss";

function Donation() {
	return (
		<div className="donation-container">
			<Container className="shadow-lg">
				<span className="icon shadow">
					<i class="bi bi-cash-coin"></i>
				</span>
				<h4> Make a Donation</h4>
				<p>
					Make sure your gift to Bhavna goes directly where its needed, without
					delay, with a secure online donation
				</p>
				<Button className="shadow-lg">Donate Now</Button>
			</Container>
		</div>
	);
}

export default Donation;
