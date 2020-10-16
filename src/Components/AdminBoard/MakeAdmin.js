import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import AdminSidebar from "./AdminSidebar";

const MakeAdmin = () => {
   //** Data Come Form Context API */
   const { loggedInUser, setLoggedInUser } = useContext(UserContext);

   //** Description & Price Value */
   const [addAdmin, setAddAdmin] = useState({});
   const handleBlur = (e) => {
      const newInfo = { ...addAdmin };
      newInfo[e.target.name] = e.target.value;
      setAddAdmin(newInfo);
   };

   //** Data Send in Database */
   const submitHandler = () => {
      const newAdmin = { ...addAdmin };

      fetch("http://localhost:7000/addAdmin", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newAdmin),
      })
         .then((res) => res.json())
         .then((data) => {
            console.log(data);
         });
   };

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
                           <h3 className="admin-page-title">Make a Admin</h3>
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
                                 {/** Table Form */}
                                 <form method="POST">
                                    <div className="form-row">
                                       <div className="form-group col-md-6">
                                          <label for="inputEmail4">
                                             Email{" "}
                                          </label>
                                          <div className="add-admin d-flex">
                                             <input
                                                type="email"
                                                id="titleAdd"
                                                name="email"
                                                onBlur={handleBlur}
                                                required
                                                className="form-control"
                                                placeholder="jon@gamil.com"
                                             />
                                             <Link to="/makeAdmin">
                                                <button
                                                   onClick={submitHandler}
                                                   type="submit"
                                                   className="add-submit btn btn-primary ml-auto"
                                                >
                                                   Submit
                                                </button>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 </form>
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

export default MakeAdmin;
