import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logos/logo.png";

//** Import FontAwesome */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const AdminSidebar = () => {
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
               <Link to="/allUser">
                  <button>
                     <FontAwesomeIcon icon={faShoppingBag} />
                     Service List
                  </button>
               </Link>
               <Link to="/addService">
                  <button>
                     <FontAwesomeIcon icon={faPlus} />
                     Add Service
                  </button>
               </Link>
               <Link to="/makeAdmin">
                  <button>
                     <FontAwesomeIcon icon={faUserPlus} />
                     Make Admin
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default AdminSidebar;
