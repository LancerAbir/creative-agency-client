import React from "react";

const SingleUser = ({ userIn }) => {
   return (
      <tbody>
         <tr>
            <td> {userIn.fastName} </td>
            <td> {userIn.email} </td>
            <td> {userIn.title} </td>
            <td> {userIn.description} </td>
            <td>
               <select class="custom-select" id="inputGroupSelect01">
                  <option value="1">Pending</option>
                  <option value="2">Done</option>
                  <option value="3">On going</option>
               </select>
            </td>
         </tr>
      </tbody>
   );
};

export default SingleUser;
