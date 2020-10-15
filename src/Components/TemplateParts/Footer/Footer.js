import React from "react";

const Footer = () => {
   return (
      <div className="footer-section input-box-bg">
         <div className="container">
            <div className="row">
               <div className="col-md-6 col-sm-6 col-12">
                  {/** Footer Content **/}
                  <div className="footer-title">
                     <h2>
                        Let us handle your <br /> project, professionally.
                     </h2>
                     <p>
                        With well written codes, we build amazing apps for all
                        platforms, mobile and web apps in general.
                     </p>
                  </div>
               </div>
               <div className="col-md-6 col-sm-6 col-12">
                  {/** Footer Form Box **/}
                  <form>
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
                           required
                           class="form-control"
                           placeholder="Your name / company’s name"
                        />
                     </div>
                     <div class="form-group">
                        <textarea
                           class="form-control"
                           rows="3"
                           required
                           placeholder="Your message"
                        ></textarea>
                     </div>

                     <button type="submit" class="section-btn">
                        Send
                     </button>
                  </form>
               </div>
            </div>
            <div className="row">
               <div className="col-md-10 offset-md-1 col-sm-12 col-12 text-center footer-bottom">
                  <p>copyright Orange labs {`${new Date().getFullYear()}`}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
