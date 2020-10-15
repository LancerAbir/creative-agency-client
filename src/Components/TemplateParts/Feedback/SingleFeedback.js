import React from "react";

const SingleFeedback = ({ feedBack }) => {
   return (
      <div className="col-md-4 col-sm-6 col-12 ">
         <div className="single-feedback">
            <div className="feedback-img d-inline-flex">
               <img src={feedBack.customerImg} alt="" />
               <div className="feedback-content">
                  <h3>{feedBack.name}</h3>
                  <h5>{feedBack.surname}</h5>
               </div>
            </div>
            <div className="feedback-comments"></div>
            <p>{feedBack.comments}</p>
         </div>
      </div>
   );
};

export default SingleFeedback;
