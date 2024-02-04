import { Carousel, Image } from "react-bootstrap";
import "./ImageCarousel.scss";

function ImageCarousel() {
	return (
		<div className="image-carousel-container">
			<Carousel className="shadow-lg image-carousel">
				<Carousel.Item>
					<Image
						className="carousel-image"
						src="https://picsum.photos/900/500"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						className="carousel-image"
						src="https://picsum.photos/900/500"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>

				<Carousel.Item>
					<Image
						className="carousel-image"
						src="https://picsum.photos/900/500"
					/>
					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	);
}

export default ImageCarousel;
