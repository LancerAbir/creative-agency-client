import React, { useContext } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import AdminSidebar from "./AdminSidebar";
import SingleUser from "./SingleUser";

const AllUser = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   //** UseState */
   const [userInfo, setUserInfo] = useState([
      {
         name: "lancer Abir",
         email: "anjan.o24@gmail.com",
         service: "Graphic Design",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
         name: "Sufi Ahmed Hamim",
         email: "sufi@gmail.com",
         service: "Wev Design",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
         name: "Abir Kumar",
         email: "kumar@gmail.com",
         service: "Wev Developer",
         description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
   ]);

   return (
      <div className="board-bg">
         <div className="container-fluid">
            <div className="row">
               {/** Sudebar */}
               <AdminSidebar></AdminSidebar>
               <div className="col-md-9">
                  <div className="admin-content">
                     <div className="upper-bar d-flex justify-content-between">
                        <h3 className="admin-page-title">Services list</h3>
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
                           <div className="user-table">
                              <table class="table">
                                 {/* <!--  Table Header --!> */}
                                 <thead>
                                    <tr>
                                       <th scope="col"> Name </th>
                                       <th scope="col"> Email ID </th>
                                       <th scope="col"> Service </th>
                                       <th scope="col"> Project Details </th>
                                       <th scope="col"> Status </th>
                                    </tr>
                                 </thead>
                                 {/* <!--  Table Data --!> */}
                                 {userInfo.map((userIn) => (
                                    <SingleUser
                                       key={userIn.key}
                                       userIn={userIn}
                                    ></SingleUser>
                                 ))}
                              </table>
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

export default AllUser;
