import React from "react";
import { Link,useParams } from "react-router-dom";
import user from "../images/user.png";

function ContactDetails(){
    let {id} = useParams();
    return (
        <div className="main">
            <div className="ui main centered">
                <div className="image">
                    <img src={user} alt="user">
                        
                    </img>
                </div>
                <div className="content">
                    <div className="header">
                        {id}
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
}

export default ContactDetails;