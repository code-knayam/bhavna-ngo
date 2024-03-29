import { Col, Container, Image, Row } from "react-bootstrap";
import "./Footer.scss";

function Footer() {
	return (
		<footer className="footer-container">
			<Container>
				<Row>
					<Col className="brand-container">
						<Image
							className="brand-logo"
							src="https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/logo.png?alt=media&token=f0ec8581-e15d-4a09-812c-fa3c5376e31d"
						/>
					</Col>
					<Col>
						<h6 className="brand-name">Bhavna, An intent to serve</h6>

						<Row className="contact-row">
							<p className="contact">
								<span className="icon">
									<i class="bi bi-house-door-fill"></i>
								</span>
								<span className="label">
									Room no-1, 22 MIG, W block, Keshav Nagar, <br />
									Kanpur , UP - 208014
								</span>
							</p>
							<p className="contact">
								<span className="icon">
									<i class="bi bi-telephone-fill"></i>
								</span>
								<span className="label">
									+91-9651689753
									<br />
									bhavna.ngo@gmail.com
								</span>
							</p>
						</Row>
					</Col>
				</Row>
			</Container>
			<p className="copyright">Copyright © 2024 Bhavna. All rights reserved.</p>
		</footer>
	);
}

export default Footer;
