import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import { UserContext } from "../../App";

const PrivateRouteAdmin = ({ children, ...rest }) => {
   //** Data Come Form Context API */
   const { loggedInUser, setLoggedInUser } = useContext(UserContext);

   //    //** Get Data Come From Server */
   //    const [admin, setAdmin] = useState([]);
   //    useEffect(() => {
   //       fetch("http://localhost:7000/admin")
   //          .then((res) => res.json())
   //          .then((data) => {
   //             setAdmin(data);
   //          });
   //    }, []);
   //    const pureAdmin = admin.map((add) => add.email);
   //    const originalAdmin = pureAdmin.toString();

   return (
      <Route
         {...rest}
         render={({ location }) =>
            loggedInUser.email ? (
               children
            ) : (
               <Redirect
                  to={{
                     pathname: "/adminLogin",
                     state: { from: location },
                  }}
               />
            )
         }
      />
   );
};

export default PrivateRouteAdmin;
