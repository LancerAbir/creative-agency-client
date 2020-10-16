import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../../images/logos/logo.png";
import { UserContext } from "../../App";

//** Import FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";

const UserSidebar = () => {
   //** Data Come Form Context API */
   const {
      singleData,
      setSingleData,
      loggedInUser,
      setLoggedInUser,
      user,
      setUser,
   } = useContext(UserContext);

   //** Dynamic Key Single Place */

   const { SingleOrderKey } = useParams();
   useEffect(() => {
      if (loggedInUser.length > 0) {
         const card = loggedInUser.find(
            (sinData) => sinData._id === SingleOrderKey
         );
         setUser(card);
      }
   }, []);

   return (
      <div className="col-md-3">
         <div className="sidebar">
            {/* <!--  Sidebar Logo --!> */}
            <Link to="/">
               <div className="sidebar-img">
                  <img src={logo} alt="" />
               </div>
            </Link>
            {/* <!--  Sidebar Route --!> */}
            <div className="sidebar-route">
               <Link to="/order">
                  <button>
                     <FontAwesomeIcon icon={faShoppingCart} />
                     Order
                  </button>
               </Link>
               <Link to="/serviceList">
                  <button>
                     <FontAwesomeIcon icon={faShoppingBag} />
                     Service list
                  </button>
               </Link>
               <Link to="/review">
                  <button>
                     <FontAwesomeIcon icon={faCommentDots} />
                     Review
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default UserSidebar;
