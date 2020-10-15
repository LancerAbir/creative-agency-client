import React from "react";
import Navbar from "./Navbar";
import headerImage from "../../../images/logos/header-img.png";

const Headers = () => {
   return (
      <div className="header-section">
         <div className="container">
            {/** Navbar **/}
            <Navbar></Navbar>
            <div className="header-content">
               <div className="row">
                  <div className="col-md-5 col-sm-12 col-12">
                     <div className="header-content">
                        <h1>
                           Let’s Grow Your <br /> Brand To The <br /> Next Level
                        </h1>
                        <p>
                           Lorem ipsum dolor sit amet, consectetur adipiscing
                           elit. Purus commodo ipsum duis laoreet maecenas.
                           Feugiat
                        </p>
                        <button className="section-btn">Hire Us</button>
                     </div>
                  </div>
                  <div className="col-md-7 col-sm-12 col-12">
                     <div className="header-image">
                        <img className="img-fluid" src={headerImage} alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Headers;
