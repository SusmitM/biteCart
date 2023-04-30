import { NavLink } from "react-router-dom";
import Carousel from 'react-elastic-carousel';
import { SliderCard } from "../components/SliderCard";
import img1 from "../Images/slider-img1.png";
import img2 from "../Images/slider-img2.png";
import img3 from "../Images/slider-img3.png";
import img4 from "../Images/slider-img4.png";

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
     <SliderCard location={img1}/>
      <SliderCard location={img2}/>
      <SliderCard location={img3}/>
      <SliderCard location={img4}/>
      <SliderCard location={img1}/>
      <SliderCard location={img2}/>
      <SliderCard location={img3}/>
      <SliderCard location={img4}/>
      <SliderCard location={img1}/>
      <SliderCard location={img2}/>
      <SliderCard location={img3}/>
      <SliderCard location={img4}/>
     </Carousel>
      </div>
    </div>
  );
};
