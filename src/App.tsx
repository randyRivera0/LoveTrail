import "./App.css";
import PasswordFieldWithCarousel from "./components/PasswordFieldWithCarousel";
import ImageCarousel from "./components/ImageCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./components/Img";
import halloween from "./assets/dome_y_randy_en_la_fiesta_de_halloween_2024.jpg";
import juntos from "./assets/juntos.jpeg";
import ella from "./assets/ella_sola_linda.jpeg";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const images0 = [
  juntos,
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+5",
  "src/assets/dome_y_randy_en_la_fiesta_de_halloween_2024.jpg",
];

const renderCarousel = (images: string[]) => {
  return (
    <Carousel
      containerClass="carousel-container px-2 gap-3"
      itemClass="carousel-item-padding-40-px"
      className="p-2 carousel w-100 overflow-hidden  gap-3"
      responsive={responsive}
    >
      {images.map((src, index) => (
        <div
          key={index}
          className="text-center image-wrapper"
          style={{ padding: "0 10px" }}
        >
          <Img
            src={src}
            width={400}
            height={400}
            className={"images" + index}
            usePlaceholder={false}
          />
        </div>
      ))}
    </Carousel>
  );
};

function App() {
  return (
    <>
      <h1 className="text-center text-primary fw-bold d-none d-md-block">
        Hasta el futuro juntos
      </h1>
      <h2 className="d-none d-md-block">Carousel con contrasena</h2>

      <PasswordFieldWithCarousel></PasswordFieldWithCarousel>

      <div>
        <h2>Custom Image Carousel</h2>
        <ImageCarousel images={images0} visibleCount={1} />
      </div>

      <h2 className="d-none d-md-block">Carousel bonito</h2>
      <Carousel responsive={responsive}>
        <div>
          <Img
            src={halloween}
            width={400}
            height={400}
            className="No"
            usePlaceholder={false}
          />
        </div>
        <div>
          <Img
            src={juntos}
            width={400}
            height={400}
            className="cat-photo"
            usePlaceholder={false}
          />
        </div>
      </Carousel>
      <div className="container mt-4">
        <div className="row">
          <h2 className="mt-5 mb-3 text-center">Carousel 2</h2>
          {renderCarousel(images0)}
        </div>
      </div>

      <div className="container overflow-hidden">
        <div className="row">
          <div className="col  d-flex justify-content-center flex-column align-items-center">
            <h2 className="mb-3 text-center">Carousel 1</h2>
            {renderCarousel(images0)}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
