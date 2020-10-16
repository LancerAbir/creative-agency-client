import React, { useContext, useState } from "react";
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

   return (
      <div className="board-bg">
         <div className="container-fluid">
            <div className="row">
               {/** Sudebar */}
               <AdminSidebar></AdminSidebar>
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
                                       <label for="inputEmail4">Email </label>
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
            </div>
         </div>
      </div>
   );
};

export default MakeAdmin;
