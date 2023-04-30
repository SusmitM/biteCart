import { NavLink } from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import { SliderCard } from "../components/SliderCard";



export const Home = () => {

  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
  ];

  return (
    <div className="homeContainer">
      <div className="navigationSection">
        <h1>BiteCart</h1>

        <NavLink to="/menu">
          {" "}
          <button className="MenuBtn">Menu</button>
        </NavLink>
      </div>
      <div className="sliderSection">
     <Carousel breakPoints={breakpoints}
       isInfinity={true}
       enableAutoPlay={true}
       autoPlaySpeed={3000}
       showArrows={true}
        pagination={false}
       >
     <SliderCard location="..\src\assests\slider-img1.png"/>
      <SliderCard location="..\src\assests\slider-img2.png"/>
      <SliderCard location="..\src\assests\slider-img3.png"/>
      <SliderCard location="..\src\assests\slider-img4.png"/>
      <SliderCard location="..\src\assests\slider-img1.png"/>
      <SliderCard location="..\src\assests\slider-img2.png"/>
      <SliderCard location="..\src\assests\slider-img3.png"/>
      <SliderCard location="..\src\assests\slider-img4.png"/>
      <SliderCard location="..\src\assests\slider-img1.png"/>
      <SliderCard location="..\src\assests\slider-img2.png"/>
      <SliderCard location="..\src\assests\slider-img3.png"/>
      <SliderCard location="..\src\assests\slider-img4.png"/>
     </Carousel>
      </div>
    </div>
  );
};
