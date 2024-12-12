import "./App.css";
// import PasswordFieldWithCarousel from "./components/PasswordFieldWithCarousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./components/Img";
import ProtectedDestination from "./components/ProtectedDestination";
import FloatingHearts from "./components/FloatingHearts";
import "./love.css";
import one from "./assets/1.jpg";
import two from "./assets/2.jpg";
import three from "./assets/3.jpg";
import four from "./assets/4.jpg";
import five from "./assets/5.jpg";
import six from "./assets/6.jpg";
import seven from "./assets/7.jpg";
import eight from "./assets/8.jpg";
import nine from "./assets/9.jpg";
import ten from "./assets/10.jpg";
import eleven from "./assets/11.jpg";
import twelve from "./assets/12.jpg";
import thirteen from "./assets/13.jpg";
import fourteen from "./assets/14.jpg";
import fifteen from "./assets/15.jpg";
import sixteen from "./assets/16.jpg";
import seventeen from "./assets/17.jpg";
import eighteen from "./assets/18.jpg";
import nineteen from "./assets/19.jpg";
import twenty from "./assets/20.jpg";
import twentyOne from "./assets/21.jpg";
import twentyTwo from "./assets/22.jpg";
import twentyThree from "./assets/23.jpeg";
import twentyFour from "./assets/24.jpg";
import twentyFive from "./assets/25.jpg";
import twentySix from "./assets/26.jpg";
import twentySeven from "./assets/27.jpg";
import twentyEight from "./assets/28.jpg";

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
function generateImagePaths(start: number, end: number): string[] {
  const paths: string[] = [];
  for (let i = start; i <= end; i++) {
    paths.push("./assets/" + i + ".jpg");
  }
  return paths;
}*/

const images0 = [one, two, three, four, five, six, seven];
const images1 = [eight, nine, ten, eleven, twelve, thirteen, fourteen];
const images2 = [
  fifteen,
  sixteen,
  seventeen,
  eighteen,
  nineteen,
  twenty,
  twentyOne,
];
const images3 = [
  twentyTwo,
  twentyThree,
  twentyFour,
  twentyFive,
  twentySix,
  twentySeven,
  twentyEight,
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

      <h1 className="text-center text-white fw-bold d-none d-md-block">
        Hasta el futuro juntos
      </h1>

      <div className="d-flex flex-column align-items-center justify-content-center mt-4 overflow-hidden">
        <ProtectedDestination
          correctPassword="riocentro ceibos"
          prompt="🔒¿Cual fue nuestra primera salida en la calle?🔒"
        >
          {renderCarousel(images0)}
        </ProtectedDestination>
        <ProtectedDestination
          correctPassword="12/06/2024"
          prompt="🔒¿En que fecha nos hicimos novios?🔒"
        >
          {renderCarousel(images1)}
        </ProtectedDestination>
        <ProtectedDestination
          correctPassword="rectorado"
          prompt="🔒¿Donde fue nuestro primer beso?🔒"
        >
          {renderCarousel(images2)}
        </ProtectedDestination>
        <ProtectedDestination
          correctPassword="si"
          prompt="🔒¿Deseas continuar juntos por mucho tiempo?🔒"
        >
          {renderCarousel(images3)}
        </ProtectedDestination>
      </div>
    </>
  );
}

export default App;
