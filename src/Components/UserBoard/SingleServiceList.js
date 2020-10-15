import React from "react";

const SingleServiceList = ({ service }) => {
   return (
      <div className="col-md-6 col-sm-6 col-12">
         <div className="user-table">
            <div className="card-box">
               <div className="card-icon d-flex">
                  <img src={service.serviceImg} alt="" />
                  <button className="btn ml-auto">pending</button>
               </div>
               <h2>{service.title}</h2>
               <p>{service.description}</p>
            </div>
         </div>
      </div>
   );
};

export default SingleServiceList;
