import React, { useContext } from "react";
import { UserContext } from "../../App";
import AdminSidebar from "./AdminSidebar";

const MakeAdmin = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
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
                                             name="titleAdd"
                                             id="titleAdd"
                                             required
                                             className="form-control"
                                             placeholder="jon@gamil.com"
                                          />
                                          <button
                                             type="submit"
                                             className="add-submit btn btn-primary ml-auto"
                                          >
                                             Submit
                                          </button>
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
