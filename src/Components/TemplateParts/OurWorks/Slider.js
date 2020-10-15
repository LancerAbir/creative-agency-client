import React from "react";

const Slider = ({ slide }) => {
   return (
      <div className="theme-slider">
         <img src={slide.img} alt="" />
      </div>
   );
};

export default Slider;
