import React, { useContext } from "react";
import { UserContext } from "../../App";
import UserSidebar from "./UserSidebar";
import uploadIcon from "../../images/icons/cloud-upload-outline 1.png";

const Order = () => {
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
                        <h3 className="admin-page-title">Order</h3>
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
                                                   placeholder="Your name / company’s name"
                                                />
                                             </div>
                                             <div class="form-group">
                                                <input
                                                   type="email"
                                                   required
                                                   class="form-control"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Your email address"
                                                />
                                             </div>
                                             <div class="form-group">
                                                <input
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Graphic Design"
                                                />
                                             </div>
                                             <div class="form-group">
                                                <textarea
                                                   style={{ height: "112px" }}
                                                   class="form-control"
                                                   rows="3"
                                                   required
                                                   placeholder="Project Details"
                                                ></textarea>
                                             </div>
                                             <div className="price_upload d-flex justify-content-between">
                                                <div class="form-group">
                                                   <input
                                                      type="text"
                                                      required
                                                      class="form-control"
                                                      placeholder="Price"
                                                   />
                                                </div>
                                                {/** Image Upload */}
                                                <div className="form-group">
                                                   <input
                                                      type="file"
                                                      name="file-2[]"
                                                      required
                                                      id="file-2"
                                                      class="inputfile inputfile-2"
                                                      data-multiple-caption="{count} files selected"
                                                      multiple=""
                                                   />
                                                   <label
                                                      className="image-upload"
                                                      for="file-2"
                                                   >
                                                      <img
                                                         src={uploadIcon}
                                                         alt=""
                                                      />
                                                      <span>Upload Icon </span>
                                                   </label>
                                                </div>
                                             </div>

                                             <button
                                                type="submit"
                                                class="section-btn"
                                             >
                                                Send
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

export default Order;
