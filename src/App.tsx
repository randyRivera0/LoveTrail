import "./App.css";
//import PasswordFieldWithCarousel from "./components/PasswordFieldWithCarousel";
//import ImageCarousel from "./components/ImageCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./components/Img";
import halloween from "./assets/dome_y_randy_en_la_fiesta_de_halloween_2024.jpg";
import juntos from "./assets/juntos.jpeg";
import ella from "./assets/ella_sola_linda.jpeg";

function App() {
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
  /*
  const images = [
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3",
    "https://via.placeholder.com/300x200?text=Image+4",
    "https://via.placeholder.com/300x200?text=Image+5",
    "src/assets/dome_y_randy_en_la_fiesta_de_halloween_2024.jpg",
  ];
*/
  return (
    <>
      <h1 className="text-center text-primary fw-bold d-none d-md-block">
        Hasta el futuro juntos
      </h1>
      <h2 className="d-none d-md-block">Carousel con contrasena</h2>
      {/*
      <PasswordFieldWithCarousel></PasswordFieldWithCarousel>
      
      <div>
        <h2>Custom Image Carousel</h2>
        <ImageCarousel images={images} visibleCount={1} />
      </div>
      */}
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
        <div>
          <Img
            src={ella}
            width={400}
            height={400}
            className="cat-photo"
            usePlaceholder={false}
          />
        </div>
        <div>
          <Img
            src="src/assets/dome_y_randy_en_la_fiesta_de_halloween_2024.jpg"
            width={400}
            height={400}
            className="cat-photo"
            usePlaceholder={false}
          />
        </div>
      </Carousel>
    </>
  );
}

export default App;
