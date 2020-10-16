import React, { useEffect, useState } from "react";
import SingleFeedback from "./SingleFeedback";

const Feedback = () => {
   //** Get Data Come From Server */
   const [feedbackData, setFeedbackData] = useState([]);
   useEffect(() => {
      fetch("http://localhost:7000/showFeedback")
         .then((res) => res.json())
         .then((data) => {
            setFeedbackData(data);
         });
   }, []);

   return (
      <div className="feedback-section">
         <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-12 col-12  text-center">
               {/** Section Title **/}
               <div className="section-title">
                  <h2>
                     Clients <span> Feedback </span>
                  </h2>
               </div>
            </div>
         </div>
         <div className="row">
            {feedbackData.map((feedBack) => (
               <SingleFeedback feedBack={feedBack}></SingleFeedback>
            ))}
         </div>
      </div>
   );
};

export default Feedback;
