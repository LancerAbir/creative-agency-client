import React from "react";

const SingleServiceList = ({ service }) => {
   return (
      <div className="col-md-6 col-sm-6 col-12">
         <div className="user-table">
            <div className="card-box">
               <div className="card-icon d-flex">
                  {service.image ? (
                     <img
                        src={`data:image/png;base64,${service.image.img}`}
                        alt={service.title}
                     />
                  ) : (
                     <img src={`http://localhost:7000/${service.img}`} alt="" />
                  )}

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
