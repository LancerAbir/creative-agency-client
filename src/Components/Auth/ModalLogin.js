import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";

//** Import Popup Modal */
import Modal from "react-modal";
import { signOutHandler } from "./LoginManager";

//** Custom Styles Popup Modal */
const customStyles = {
   content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
   },
};

//** Root set Popup Modal */
Modal.setAppElement("#root");

const ModalLogin = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   const [modalIsOpen, setIsOpen] = useState(false);
   const openModal = () => {
      setIsOpen(true);
   };

   const closeModal = () => {
      setIsOpen(false);
   };

   //** Google Sign Out Handler */
   const googleSignOut = () => {
      signOutHandler().then((res) => {
         setLoggedInUser(res);
      });
   };
   return (
      <>
         {loggedInUser.email ? (
            <button onClick={googleSignOut} className="section-btn btn-danger">
               Logout
            </button>
         ) : (
            <button onClick={openModal} className="section-btn">
               Login
            </button>
         )}

         {/** Popup Modal **/}
         <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
         >
            <button className="btn btn-danger px-2" onClick={closeModal}>
               close
            </button>
            <h2 className="text-center mb-4"> Login Here </h2>
            <div className="modal-login d-flex justify-content-around mb-4">
               <Link to="/adminLogin">
                  <button
                     onClick={openModal}
                     className="section-btn bg-warning mr-4"
                  >
                     Login as a Admin
                  </button>
               </Link>
               <Link to="/userLogin">
                  <button onClick={openModal} className="section-btn">
                     Login as a User
                  </button>
               </Link>
            </div>
         </Modal>
      </>
   );
};

export default ModalLogin;
