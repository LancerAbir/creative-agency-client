import React, { createContext, useState } from "react";
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
import Order from "./Components/UserBoard/Order";
import ServiceList from "./Components/UserBoard/ServiceList";
import Review from "./Components/UserBoard/Review";
import AllUser from "./Components/AdminBoard/AllUser";
import AddService from "./Components/AdminBoard/AddService";
import MakeAdmin from "./Components/AdminBoard/MakeAdmin";

//** Context API */
export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({});
   return (
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
         <div className="App">
            <BrowserRouter>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/ourPortfolio" component={OurPortfolio} />
                  <Route exact path="/ourTeam" component={OurTeam} />
                  <Route exact path="/contactUs" component={ContactUs} />
                  <Route exact path="/adminLogin" component={AdminLogin} />
                  <Route exact path="/userLogin" component={UserLogin} />
                  <Route path="/order">
                     <Order></Order>
                  </Route>
                  <Route path="/serviceList">
                     <ServiceList></ServiceList>
                  </Route>
                  <Route path="/review">
                     <Review></Review>
                  </Route>

                  {/**  PrivateRoute  */}
                  <Route path="/allUser">
                     <AllUser></AllUser>
                  </Route>
                  <Route path="/addService">
                     <AddService></AddService>
                  </Route>
                  <Route path="/makeAdmin">
                     <MakeAdmin></MakeAdmin>
                  </Route>
                  <Route path="*" component={NotFound} />
               </Switch>
            </BrowserRouter>
         </div>
      </UserContext.Provider>
   );
}

export default App;
