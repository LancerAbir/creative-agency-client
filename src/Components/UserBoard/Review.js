import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import UserSidebar from "./UserSidebar";

const Review = () => {
   //** Data Come Form Context API */
   const { loggedInUser, setLoggedInUser } = useContext(UserContext);

   //** Description & Price Value */
   const [info, setInfo] = useState({});
   const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
   };

   //** Data Submit in DataBase */
   const submitHandler = () => {
      const newService = { ...loggedInUser, ...info };

      fetch("http://localhost:7000/review", {
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

      setInfo({});
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
                                                   value={loggedInUser.fastName}
                                                />
                                             </div>
                                             <div class="form-group">
                                                <input
                                                   type="text"
                                                   onBlur={handleBlur}
                                                   required
                                                   class="form-control"
                                                   name="companyName"
                                                   aria-describedby="emailHelp"
                                                   placeholder="Company’s name, Designation"
                                                />
                                             </div>

                                             <div class="form-group">
                                                <textarea
                                                   style={{ height: "112px" }}
                                                   onBlur={handleBlur}
                                                   class="form-control"
                                                   rows="3"
                                                   name="personalDescription"
                                                   required
                                                   placeholder="Description"
                                                ></textarea>
                                             </div>

                                             <Link to="/">
                                                <button
                                                   onClick={submitHandler}
                                                   type="submit"
                                                   class="section-btn"
                                                >
                                                   Submit
                                                </button>
                                             </Link>
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
