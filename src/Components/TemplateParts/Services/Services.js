import React, { useEffect, useState } from "react";
import SingleService from "./SingleService";

//** Import Service Image  */
// import serviceImage01 from "../../../images/icons/service1.png";
// import serviceImage02 from "../../../images/icons/service2.png";
// import serviceImage03 from "../../../images/icons/service3.png";

// // //** Service Temporary Data */
// const serviceData = [
//    {
//       serviceImg: serviceImage01,
//       serviceTitle: "Web & Mobile design",
//       serviceDescription:
//          "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
//    },
//    {
//       serviceImg: serviceImage02,
//       serviceTitle: "Graphic design",
//       serviceDescription:
//          "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
//    },
//    {
//       serviceImg: serviceImage03,
//       serviceTitle: "Web development",
//       serviceDescription:
//          "With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",
//    },
// ];

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
               <SingleService service={service}> </SingleService>
            ))}
         </div>
      </div>
   );
};

export default Services;
