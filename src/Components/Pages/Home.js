import React from "react";
import Feedback from "../TemplateParts/Feedback/Feedback";
import Footer from "../TemplateParts/Footer/Footer";
//** Import Template Parts */
import Headers from "../TemplateParts/Headers/Headers";
import OurWorks from "../TemplateParts/OurWorks/OurWorks";
import Services from "../TemplateParts/Services/Services";
import Sponsored from "../TemplateParts/Sponsored/Sponsored";

const Home = () => {
   return (
      <>
         <Headers></Headers>
         <div className="container">
            <Sponsored></Sponsored>
            <Services></Services>
         </div>
         <OurWorks></OurWorks>
         <div className="container">
            <Feedback></Feedback>
         </div>
         <Footer></Footer>
      </>
   );
};

export default Home;
