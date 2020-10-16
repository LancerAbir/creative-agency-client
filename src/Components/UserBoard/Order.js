import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../App";
import { useParams } from "react-router-dom";
import UserSidebar from "./UserSidebar";
import uploadIcon from "../../images/icons/cloud-upload-outline 1.png";

const Order = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   //** Logged User Info */
   const loggedName = loggedInUser.email && loggedInUser.fastName;
   const loggedEmail = loggedInUser.email && loggedInUser.email;

   //** Description & Price Value */
   const [info, setInfo] = useState({});
   const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
   };

   //** Single Service Data Come From Server */
   const [singleData, setSingleData] = useState([]);
   useEffect(() => {
      fetch("http://localhost:7000/service")
         .then((res) => res.json())
         .then((data) => setSingleData(data));
   }, []);

   //** Dynamic Key Single Place */
   const [register, setRegister] = useState({});
   const { SingleOrderKey } = useParams();
   useEffect(() => {
      if (singleData.length > 0) {
         const card = singleData.find(
            (sinData) => sinData._id === SingleOrderKey
         );
         setRegister(card);
      }
   }, [singleData]);

   //** Data Submit in DataBase */
   const submitHandler = () => {
      const newService = { ...loggedInUser, ...register, ...info };

      fetch("http://localhost:7000/singleService", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newService),
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
                                                   value={loggedName}
                                                />
                                             </div>
                                             <div class="form-group">
                                                <input
                                                   type="email"
                                                   required
                                                   class="form-control"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Your email address"
                                                   value={loggedEmail}
                                                />
                                             </div>
                                             <div class="form-group">
                                                <input
                                                   type="text"
                                                   class="form-control"
                                                   placeholder="Graphic Design"
                                                   value={register.title}
                                                />
                                             </div>
                                             <div class="form-group">
                                                <textarea
                                                   style={{ height: "112px" }}
                                                   class="form-control"
                                                   rows="3"
                                                   required
                                                   placeholder="Project Details"
                                                   name="details"
                                                   onBlur={handleBlur}
                                                ></textarea>
                                             </div>
                                             <div className="price_upload d-flex justify-content-between">
                                                <div class="form-group">
                                                   <input
                                                      type="number"
                                                      required
                                                      class="form-control"
                                                      placeholder="Price"
                                                      name="price"
                                                      onBlur={handleBlur}
                                                   />
                                                </div>
                                                {/** Image Upload */}
                                                <div className="form-group">
                                                   <input
                                                      type="file"
                                                      name="file-2[]"
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
                                                      <span>
                                                         Upload project file{" "}
                                                      </span>
                                                   </label>
                                                </div>
                                             </div>

                                             <button
                                                onClick={submitHandler}
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
