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
				<p>पोषण - an attempt to save kids from malnutrition</p>
				<Button className="shadow-lg">
					<a
						href="https://milaap.org/fundraisers/support-kids-731"
						target="_blank"
						rel="noreferrer"
					>
						Donate Now
					</a>
				</Button>
			</Container>
		</div>
	);
}

export default Donation;
