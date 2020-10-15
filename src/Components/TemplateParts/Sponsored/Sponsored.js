import React from "react";
import slack from "../../../images/logos/slack.png";
import google from "../../../images/logos/google.png";
import uber from "../../../images/logos/uber.png";
import netflix from "../../../images/logos/netflix.png";
import airbnb from "../../../images/logos/airbnb.png";

const Sponsored = () => {
   return (
      <div className="sponsored-section">
         <div className="row">
            <div className="col-md-12 col-sm-12 col-12">
               {/** Sponsored Logo **/}
               <div className="sponsored-image d-flex justify-content-center">
                  <img className="img-fluid" src={slack} alt="" />
                  <img className="img-fluid" src={google} alt="" />
                  <img className="img-fluid" src={uber} alt="" />
                  <img className="img-fluid" src={netflix} alt="" />
                  <img className="img-fluid" src={airbnb} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Sponsored;
