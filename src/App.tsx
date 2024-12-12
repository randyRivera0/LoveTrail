import "./App.css";
// import PasswordFieldWithCarousel from "./components/PasswordFieldWithCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./components/Img";
import halloween from "./assets/dome_y_randy_en_la_fiesta_de_halloween_2024.jpg";
import ella from "./assets/ella_sola_linda.jpeg";
import one from "./assets/1.jpg";
import ProtectedDestination from "./components/ProtectedDestination";
import FloatingHearts from "./components/FloatingHearts";
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
  one,
  "https://via.placeholder.com/300x200?text=Image+2",
  "https://via.placeholder.com/300x200?text=Image+5",
  halloween,
  ella,
];

const renderCarousel = (images: string[]) => {
  return (
    <Carousel
      containerClass="carousel-container px-2 gap-3"
      itemClass="carousel-item-padding-40-px"
      className="p-2 carousel w-100 overflow-hidden  gap-3"
      responsive={responsive}
      infinite={true}
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
      <div>
        <FloatingHearts />
        <h1 style={{ textAlign: "center", color: "#fff" }}></h1>
      </div>

      <h1 className="text-center text-primary fw-bold d-none d-md-block">
        Hasta el futuro juntos
      </h1>
      <h2 className="d-none d-md-block">Carousel con contrasena</h2>

      {/*<PasswordFieldWithCarousel></PasswordFieldWithCarousel>*/}

      <div className="d-flex flex-column align-items-center justify-content-center mt-4 overflow-hidden"></div>
      <ProtectedDestination
        correctPassword="12345"
        prompt="El dia que nos conocimos"
      >
        <div className="d-flex flex-column align-items-center justify-content-center mt-4 overflow-hidden">
          <h2 className=" mb-3 text-center">Carousel 1</h2>
          {renderCarousel(images0)}
        </div>
      </ProtectedDestination>
      <ProtectedDestination correctPassword="12345" prompt="cuanto me quieres">
        <div className="d-flex flex-column align-items-center justify-content-center mt-4 overflow-hidden">
          <h2 className=" mb-3 text-center">Carousel 1</h2>
          {renderCarousel(images0)}
        </div>
      </ProtectedDestination>
    </>
  );
}

export default App;
