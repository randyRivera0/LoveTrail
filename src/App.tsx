import "./App.css";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Img from "./components/Img";
import ProtectedDestination from "./components/ProtectedDestination";
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
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
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
      containerClass="carousel-container px-2 "
      removeArrowOnDeviceType={[]}
      responsive={responsive}
      infinite={true}
      autoPlay={false}
      itemClass="carousel-item-padding-40-px"
      /*centerMode={true}*/
    >
      {images.map((src, index) => (
        <Img
          src={src}
          width={400}
          height={400}
          className={"images" + index}
          usePlaceholder={false}
        />
      ))}
    </Carousel>
  );
};

function App() {
  return (
    <>
      <div>
        <h1>
          Hasta el futuro juntos <span className="heart">♥</span>
        </h1>
      </div>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Grid
          container
          sx={{
            maxWidth: "100%",
          }}
        >
          <ProtectedDestination
            correctPassword="riocentro ceibos"
            prompt="🔒¿Cual fue nuestra primera salida en la calle?🔒"
          >
            {renderCarousel(images0)}
          </ProtectedDestination>
        </Grid>
        <Grid
          container
          sx={{
            maxWidth: "100%",
          }}
        >
          <ProtectedDestination
            correctPassword="12/06/2024"
            prompt="🔒¿En que fecha nos hicimos novios?🔒"
          >
            {renderCarousel(images1)}
          </ProtectedDestination>
        </Grid>

        <Grid
          container
          sx={{
            maxWidth: "100%",
          }}
        >
          <ProtectedDestination
            correctPassword="rectorado"
            prompt="🔒¿Donde fue nuestro primer beso?🔒"
          >
            {renderCarousel(images2)}
          </ProtectedDestination>
        </Grid>
        <Grid
          container
          sx={{
            maxWidth: "100%",
          }}
        >
          <ProtectedDestination
            correctPassword="si"
            prompt="🔒¿Deseas continuar juntos por mucho tiempo?🔒"
          >
            {renderCarousel(images3)}
          </ProtectedDestination>
        </Grid>
      </Box>
    </>
  );
}

export default App;
