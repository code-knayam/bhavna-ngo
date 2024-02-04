import { Container } from "react-bootstrap";
import "./App.scss";
import Campaigns from "./components/Campaigns/Campaigns";
import Donation from "./components/Donation/Donation";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import ImageCarousel from "./components/ImageCarousel/ImageCarousel";
import Mission from "./components/Mission/Mission";

function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<Mission />
			<Campaigns />
			<ImageCarousel />
			<Donation />

			<Container className="social-container">
				Follow Us :
				<a
					href="https://www.facebook.com/bhavna.ngo"
					target="_blank"
					rel="noreferrer"
				>
					<span className="icon">
						<i className="bi bi-facebook"></i>
					</span>
				</a>
				<a
					href="https://www.linkedin.com/company/bhavnawelfarefoundation/mycompany/"
					target="_blank"
					rel="noreferrer"
				>
					<span className="icon">
						<i class="bi bi-linkedin"></i>
					</span>
				</a>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
