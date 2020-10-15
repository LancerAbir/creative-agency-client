import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import SingleServiceList from "./SingleServiceList";
import UserSidebar from "./UserSidebar";

import serviceImg01 from "../../images/icons/service1.png";
import serviceImg02 from "../../images/icons/service2.png";
import serviceImg03 from "../../images/icons/service3.png";

const ServiceList = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const [servicedata, setServicedata] = useState([
      {
         serviceImg: serviceImg01,
         title: "Web & Mobile design",
         description:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      },
      {
         serviceImg: serviceImg02,
         title: "Graphic design",
         description:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      },
      {
         serviceImg: serviceImg03,
         title: "Web Development",
         description:
            "We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
      },
   ]);

   return (
      <div className="board-bg">
         <div className="container-fluid">
            <div className="row">
               {/** Sudebar */}
               <UserSidebar></UserSidebar>
               <div className="col-md-9">
                  <div className="admin-content">
                     <div className="upper-bar d-flex justify-content-between">
                        <h3 className="admin-page-title">Service List</h3>
                        {loggedInUser.email && (
                           <h6>
                              <img
                                 className="rounded-circle"
                                 src={loggedInUser.photo}
                                 alt=""
                              />
                              {loggedInUser.fastName}
                           </h6>
                        )}
                     </div>
                     <div className="admin-content auth-bg">
                        <div className="all-user-box">
                           <div className="row">
                              {servicedata.map((service) => (
                                 <SingleServiceList
                                    service={service}
                                 ></SingleServiceList>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ServiceList;
