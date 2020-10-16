import React, { useContext } from "react";
import { UserContext } from "../../App";
import AdminSidebar from "./AdminSidebar";
import uploadIcon from "../../images/icons/cloud-upload-outline 1.png";
import { useState } from "react";

const AddService = () => {
   //** Data Come Form Context API */
   const [loggedInUser, setLoggedInUser] = useContext(UserContext);

   //** input value */
   const [info, setInfo] = useState({});
   const handleBlur = (e) => {
      const newInfo = { ...info };
      newInfo[e.target.name] = e.target.value;
      setInfo(newInfo);
   };

   //** Upload Image Data */
   const [file, setFile] = useState(null);
   const handlerFileChange = (e) => {
      const newFile = e.target.files[0];
      setFile(newFile);
   };

   //** Data Send In Server */
   const handleSubmit = () => {
      const formData = new FormData();
      formData.append("files", file);
      formData.append("title", info.title);
      formData.append("description", info.description);

      fetch("http://localhost:7000/addService", {
         method: "POST",
         body: formData,
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
         })
         .catch((error) => {
            console.error(error);
         });
   };

   return (
      <div className="board-bg">
         <div className="container-fluid">
            <div className="row">
               {/** SideBar */}
               <AdminSidebar></AdminSidebar>
               <div className="col-md-9">
                  <div className="admin-content">
                     <div className="upper-bar d-flex justify-content-between">
                        <h3 className="admin-page-title">Add Service</h3>
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
                              <form>
                                 <div className="form-row">
                                    <div className="form-group col-md-6">
                                       <label htmlFor="inputEmail4">
                                          Service Title
                                       </label>
                                       <input
                                          type="text"
                                          required
                                          onBlur={handleBlur}
                                          name="title"
                                          className="form-control"
                                          placeholder="Enter Title"
                                       />
                                    </div>
                                    {/** Image Upload */}
                                    <div className="form-group col-md-6">
                                       <label htmlFor="inputPassword4">
                                          Icon
                                       </label>
                                       <br />
                                       <input
                                          type="file"
                                          onChange={handlerFileChange}
                                          required
                                          name="file-2[]"
                                          id="file-2"
                                          className="inputfile inputfile-2"
                                          data-multiple-caption="{count} files selected"
                                          multiple=""
                                       />
                                       <label
                                          className="image-upload"
                                          htmlFor="file-2"
                                       >
                                          <img src={uploadIcon} alt="" />
                                          <span>Upload Icon </span>
                                       </label>
                                    </div>
                                 </div>
                                 <div className="form-row">
                                    <div className="form-group col-md-6">
                                       <label htmlFor="inputAddress">
                                          Description
                                       </label>
                                       <textarea
                                          style={{ height: "121px" }}
                                          type="textarea"
                                          required
                                          onBlur={handleBlur}
                                          className="form-control"
                                          name="description"
                                          placeholder="Enter Description"
                                       />
                                    </div>
                                 </div>
                              </form>
                           </div>
                           {/** Submit Button */}
                           <button
                              onClick={() => handleSubmit()}
                              type="submit"
                              className="add-submit btn btn-primary ml-auto"
                           >
                              Submit
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AddService;
