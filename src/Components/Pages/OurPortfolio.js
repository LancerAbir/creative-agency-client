import React from "react";
import { Link } from "react-router-dom";
import Footer from "../TemplateParts/Footer/Footer";
import Navbar from "../TemplateParts/Headers/Navbar";

const OurPortfolio = () => {
   return (
      <div className="header-section">
         <div className="container">
            {/** Navbar **/}
            <Navbar></Navbar>
         </div>
         <div class="jumbotron jumbotron-fluid">
            <div class="container">
               <h1 class="display-4">Portfolio Page</h1>
               <p class="lead">
                  This is a modified jumbotron that occupies the entire
                  horizontal space of its parent.
               </p>
            </div>
         </div>
         {/** Footer **/}
         <Footer></Footer>
      </div>
   );
};

export default OurPortfolio;
