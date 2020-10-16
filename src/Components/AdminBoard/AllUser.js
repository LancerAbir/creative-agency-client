import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { UserContext } from "../../App";
import AdminSidebar from "./AdminSidebar";
import SingleUser from "./SingleUser";

const AllUser = () => {
   //** Data Come Form Context API */
   const { loggedInUser, setLoggedInUser } = useContext(UserContext);

   //** Get Data Come From Server */
   const [userInfo, setUserInfo] = useState([]);
   useEffect(() => {
      fetch("http://localhost:7000/showService")
         .then((res) => res.json())
         .then((data) => {
            setUserInfo(data);
         });
   }, []);

   //** Get Data Come From Server */
   const [admin, setAdmin] = useState([]);
   useEffect(() => {
      fetch("http://localhost:7000/admin")
         .then((res) => res.json())
         .then((data) => {
            setAdmin(data);
         });
   }, []);
   const pureAdmin = admin.map((add) => add.email);
   const originalAdmin = pureAdmin.toString();

   return (
      <div className="board-bg">
         <div className="container-fluid">
            <div className="row">
               {/** Sudebar */}
               <AdminSidebar></AdminSidebar>

               {loggedInUser.email != originalAdmin ? (
                  <div className="col-md-9">
                     <div className="admin-content">
                        <div className="admin-content auth-bg">
                           <div className="all-user-box">
                              <div className="user-table text-center">
                                 <div className="jumbotron jumbotron-fluid">
                                    <div className="container">
                                       <h1 className="display-4">
                                          You Are Not a Admin
                                       </h1>
                                       <p className="lead">
                                          Only admin can enter the secret page.
                                          No one but admin can access this page,
                                          Admin can make you administrator
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
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
               )}
            </div>
         </div>
      </div>
   );
};

export default AllUser;
