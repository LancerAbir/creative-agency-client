import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import SingleServiceList from "./SingleServiceList";
import UserSidebar from "./UserSidebar";
import { useEffect } from "react";

const ServiceList = () => {
   //** Data Come Form Context API */
   const { loggedInUser, setLoggedInUser } = useContext(UserContext);

   //** Get Data Come From Server */
   const [serviceData, setServiceData] = useState([]);
   useEffect(() => {
      fetch("http://localhost:7000/sService")
         .then((res) => res.json())
         .then((data) => {
            setServiceData(data);
         });
   }, []);

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
                              {serviceData.map((service) => (
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
