import React from "react";

const SingleFeedback = ({ feedBack }) => {
   return (
      <div className="col-md-4 col-sm-6 col-12 ">
         <div className="single-feedback">
            <div className="feedback-img d-inline-flex">
               <img src={feedBack.photo} alt="" />
               <div className="feedback-content">
                  <h3>{feedBack.fastName}</h3>
                  <h5>{feedBack.companyName}</h5>
               </div>
            </div>
            <div className="feedback-comments"></div>
            <p>{feedBack.personalDescription}</p>
         </div>
      </div>
   );
};

export default SingleFeedback;
