import "./App.css";
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
			<Footer />
		</div>
	);
}

export default App;
