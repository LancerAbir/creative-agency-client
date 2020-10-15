import React from "react";

//** Import Service Image  */
import feedbackCustomer01 from "../../../images/customer-1.png";
import feedbackCustomer02 from "../../../images/customer-2.png";
import feedbackCustomer03 from "../../../images/customer-3.png";
import SingleFeedback from "./SingleFeedback";

//** Feedback Temporary Data  */
const feedbackData = [
   {
      customerImg: feedbackCustomer01,
      name: "Nash Patrik",
      surname: "CEO, Manpol",
      comments:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
   },
   {
      customerImg: feedbackCustomer02,
      name: "Miriam Barron",
      surname: "CEO, Manpol",
      comments:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
   },
   {
      customerImg: feedbackCustomer03,
      name: "Bria Malone",
      surname: "CEO, Manpol",
      comments:
         "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat ",
   },
];

const Feedback = () => {
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
