import { Carousel, Image } from "react-bootstrap";
import "./ImageCarousel.scss";

const images = [
	{
		src: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/events%2Fjan-26-2024-1.jpg?alt=media&token=4828e26d-7874-4745-a5bc-9f6a5c477a7b",
		label: "26 Jan, 2024",
		desc: "Republic Day",
	},

	{
		src: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/events%2Fjan-26-2024-2.jpg?alt=media&token=ee372786-1c83-4e86-84c6-67f0de067591",
		label: "26 Jan, 2024",
		desc: "Republic Day",
	},

	{
		src: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/events%2Fdiwali-2023.JPG?alt=media&token=fae5e509-2e1c-4dea-a4c3-732dd690c392",
		label: "Nov, 2024",
		desc: "Diwali Celebrations",
	},

	{
		src: "https://firebasestorage.googleapis.com/v0/b/bhavna-ngo.appspot.com/o/events%2Fdrawing-1.jpg?alt=media&token=7dd3b6c6-9e29-4cc4-961a-099b82cd3b09",
		label: "May, 2023",
		desc: "Drawing Competition",
	},
];

function ImageCarousel() {
	const renderImages = () => {
		return images.map((item) => {
			return (
				<Carousel.Item>
					<Image className="carousel-image" src={item.src} />
					<Carousel.Caption>
						<h3>{item.label}</h3>
						<p>{item.desc}</p>
					</Carousel.Caption>
				</Carousel.Item>
			);
		});
	};
	return (
		<div className="image-carousel-container">
			<Carousel className="shadow-lg image-carousel">{renderImages()}</Carousel>
		</div>
	);
}

export default ImageCarousel;
