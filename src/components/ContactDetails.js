import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactDetails = (props) => {
    //  const{name,email} = props.contact
  return (
   <div className="main">
       <div className="ui main centered">
           <div className="image">
               <img src={user} alt="user">

               </img>
           </div>
           <div className="content">
               <div className="header">
                   asaf
               </div>
               <div className="description">
                   asfaf
               </div>
           </div>
       </div>
       <div className="center-div">
           <Link to='/'>
           <button className="ui button blue center">Back to Contact</button>
           </Link>
       </div>
   </div>
  );
};

export default ContactDetails;