import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/logos/logo.png";
import ModalLogin from "../../Auth/ModalLogin";

const Navbar = () => {
   return (
      <div className="row navbar">
         <div className="col-md-3 col-sm-12 col-12">
            <Link to="/">
               <div className="logo">
                  <img src={logo} alt="" />
               </div>
            </Link>
         </div>
         <div className="col-md-9 col-sm-12 col-12">
            <div className="main-menu d-flex justify-content-end">
               <ul>
                  <Link to="/"> Home </Link>
                  <Link to="/ourPortfolio"> Our Portfolio </Link>
                  <Link to="/ourTeam"> Our Team </Link>
                  <Link to="/contactUs"> Contact Us </Link>
                  {/** Popup Modal **/}
                  <ModalLogin></ModalLogin>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;
