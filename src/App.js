import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
//** Import Components */
import Home from "./Components/Pages/Home";
import OurPortfolio from "./Components/Pages/OurPortfolio";
import OurTeam from "./Components/Pages/OurTeam";
import ContactUs from "./Components/Pages/ContactUs";
import NotFound from "./Components/Pages/NotFound";
import AdminLogin from "./Components/Auth/AdminLogin";
import UserLogin from "./Components/Auth/UserLogin";
import PrivateRoute from "./Components/Pages/PrivateRoute";
import PrivateRouteAdmin from "./Components/Pages/PrivateRouteAdmin";
import Order from "./Components/UserBoard/Order";
import ServiceList from "./Components/UserBoard/ServiceList";
import Review from "./Components/UserBoard/Review";
import AllUser from "./Components/AdminBoard/AllUser";
import AddService from "./Components/AdminBoard/AddService";
import MakeAdmin from "./Components/AdminBoard/MakeAdmin";

//** Context API */
export const UserContext = createContext();

const App = ({ children }) => {
   //** Single Service Data Come From Server */
   const [singleData, setSingleData] = useState([]);
   const [user, setUser] = useState({});
   useEffect(() => {
      fetch("http://localhost:7000/service")
         .then((res) => res.json())
         .then((data) => setSingleData(data));
   }, []);

   //** Multiple ContextAPI */
   const [loggedInUser, setLoggedInUser] = useState({});

   return (
      <UserContext.Provider
         value={{
            loggedInUser,
            setLoggedInUser,
            singleData,
            setSingleData,
            user,
            setUser,
         }}
      >
         <div className="App">
            <BrowserRouter>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/ourPortfolio" component={OurPortfolio} />
                  <Route exact path="/ourTeam" component={OurTeam} />
                  <Route exact path="/contactUs" component={ContactUs} />
                  <Route exact path="/adminLogin" component={AdminLogin} />
                  <Route exact path="/userLogin" component={UserLogin} />
                  <PrivateRoute path="/order/:SingleOrderKey">
                     <Order></Order>
                  </PrivateRoute>
                  <PrivateRoute path="/serviceList">
                     <ServiceList></ServiceList>
                  </PrivateRoute>
                  <PrivateRoute path="/review">
                     <Review></Review>
                  </PrivateRoute>

                  {/**  Admin PrivateRouteAdmin  */}
                  <PrivateRouteAdmin path="/allUser">
                     <AllUser></AllUser>
                  </PrivateRouteAdmin>
                  <PrivateRouteAdmin path="/addService">
                     <AddService></AddService>
                  </PrivateRouteAdmin>
                  <PrivateRouteAdmin path="/makeAdmin">
                     <MakeAdmin></MakeAdmin>
                  </PrivateRouteAdmin>
                  <Route path="*" component={NotFound} />
               </Switch>
            </BrowserRouter>
         </div>
      </UserContext.Provider>
   );
};

export default App;
