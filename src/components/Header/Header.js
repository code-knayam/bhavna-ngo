import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
	return (
		<Navbar expand="lg" className="bg-body-tertiary navbar">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="/img/logo.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
				</Navbar.Brand>
				<Nav className="justify-content-end">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Our Work</Nav.Link>
					<Nav.Link href="#pricing">Media</Nav.Link>
					<Nav.Link href="#pricing">About</Nav.Link>
				</Nav>
			</Container>
		</Navbar>
	);
}

export default Header;
