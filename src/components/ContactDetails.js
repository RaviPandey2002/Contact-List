import React from "react";
// import { Location } from "react-router-dom";
import { Link } from 'react-router-dom';
import user from "../images/user.jpg";

const ContactDetails = (props) => {

    // const { id, name, email} =   props.contact.state;
    // console.log(props);
    // console.log({id});
    // console.log({name});
    // console.log({email});

    // const { state } = useLocation();


    const name = "NAME";
    const email = "EMAiL";
    
  return (
    <div>
        <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img src={user} alt="user img here" />
        </div>
        <div className="content">


          <div  className="header">{name}</div>
          <div className="description">{email}</div>


          <Link to="/">
          <button className="ui inverted purple fluid button">Home</button>
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactDetails;
