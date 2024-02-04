import "./Header.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
	return (
		<Navbar sticky="top" expand="lg" className="bg-body-tertiary navbar shadow">
			<Container>
				<Navbar.Brand href="#home">
					<img
						alt=""
						src="https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/logo.png?alt=media&token=f0ec8581-e15d-4a09-812c-fa3c5376e31d"
						width="40"
						height="40"
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
