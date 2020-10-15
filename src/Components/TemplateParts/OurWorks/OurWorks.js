import React from "react";
import { useState } from "react";
import Carousel from "react-elastic-carousel";
//** Import Slider Image */
import carousel01 from "../../../images/carousel-1.png";
import carousel02 from "../../../images/carousel-2.png";
import carousel03 from "../../../images/carousel-3.png";
import carousel04 from "../../../images/carousel-4.png";
import carousel05 from "../../../images/carousel-5.png";
import Slider from "./Slider";

//** Slider Temporary Data */
const sliderData = [
   {
      img: carousel01,
   },
   {
      img: carousel02,
   },
   {
      img: carousel03,
   },
   {
      img: carousel04,
   },
   {
      img: carousel05,
   },
];

const OurWorks = () => {
   const [carouselSlide, setCarouselSlide] = useState([
      {
         img: carousel01,
      },
      {
         img: carousel02,
      },
      {
         img: carousel03,
      },
      {
         img: carousel04,
      },
      {
         img: carousel05,
      },
   ]);

   return (
      <div className="ourWorks-section">
         <div className="container">
            <div className="row">
               <div className="col-md-10 offset-md-1 col-sm-12 col-12 text-center">
                  <div className="section-title">
                     <h2>
                        Here are some of <span> our works </span>
                     </h2>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12 col-sm-12 col-12">
                  <Carousel itemsToShow={3}>
                     {carouselSlide.map((slide) => (
                        <Slider slide={slide}></Slider>
                     ))}
                  </Carousel>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OurWorks;
