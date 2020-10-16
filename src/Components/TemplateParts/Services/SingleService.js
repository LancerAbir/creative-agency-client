import React from "react";
import { Link } from "react-router-dom";

const SingleService = ({ service }) => {
   return (
      <div className="col-md-4 col-sm-6 col-12">
         <Link to={"/order/" + service._id}>
            <div className="single-service">
               {service.image ? (
                  <img
                     src={`data:image/png;base64,${service.image.img}`}
                     alt={service.title}
                  />
               ) : (
                  <img src={`http://localhost:7000/${service.img}`} alt="" />
               )}
               <h3>{service.title}</h3>
               <p>{service.description}</p>
            </div>
         </Link>
      </div>
   );
};

export default SingleService;
