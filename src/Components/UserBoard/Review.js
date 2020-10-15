import React, { useContext } from "react";
import { UserContext } from "../../App";
import UserSidebar from "./UserSidebar";

const Review = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   return (
      <div className="board-bg">
         <div className="container-fluid">
            <div className="row">
               {/** Sudebar */}
               <UserSidebar></UserSidebar>
               <div className="col-md-9">
                  <div className="admin-content">
                     <div className="upper-bar d-flex justify-content-between">
                        <h3 className="admin-page-title">Review</h3>
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
                           <div className="user-table order-bg">
                              <div className="footer-section">
                                 <div className="container">
                                    <div className="row">
                                       <div className="col-md-8 col-sm-6 col-12">
                                          {/** Footer Form Box **/}
                                          <form>
                                             <div class="form-group">
                                                <input
                                                   type="text"
                                                   required
                                                   class="form-control"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Your name"
                                                />
                                             </div>
                                             <div class="form-group">
                                                <input
                                                   type="text"
                                                   required
                                                   class="form-control"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Company’s name, Designation"
                                                />
                                             </div>

                                             <div class="form-group">
                                                <textarea
                                                   style={{ height: "112px" }}
                                                   class="form-control"
                                                   rows="3"
                                                   required
                                                   placeholder="Description"
                                                ></textarea>
                                             </div>

                                             <button
                                                type="submit"
                                                class="section-btn"
                                             >
                                                Submit
                                             </button>
                                          </form>
                                       </div>
                                    </div>
                                 </div>
                              </div>
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

export default Review;
