import React from "react";
import Footer from "../TemplateParts/Footer/Footer";
import Navbar from "../TemplateParts/Headers/Navbar";

const NotFound = () => {
   return (
      <div className="header-section">
         <div className="container">
            {/** Navbar **/}
            <Navbar></Navbar>
         </div>
         <div class="jumbotron jumbotron-fluid">
            <div class="container">
               <h1 class="display-4">404 Not Found!</h1>
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

export default NotFound;
