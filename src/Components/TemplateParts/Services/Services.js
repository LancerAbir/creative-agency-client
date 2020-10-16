import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

const Services = () => {
   //** Service Data Come From Server */
   const [serviceAllData, setServiceAllData] = useState([]);
   useEffect(() => {
      fetch("http://localhost:7000/service")
         .then((res) => res.json())
         .then((data) => {
            setServiceAllData(data);
         });
   }, []);

   return (
      <div className="services-section">
         <div className="row">
            <div className="col-md-10 offset-md-1 col-sm-12 col-12 text-center">
               {/** Section Title **/}
               <div className="section-title">
                  <h2>
                     Provide awesome <span> services </span>
                  </h2>
               </div>
            </div>
            {serviceAllData.map((service) => (
               <SingleService
                  key={service._id}
                  service={service}
               ></SingleService>
            ))}
         </div>
      </div>
   );
};

export default Services;
