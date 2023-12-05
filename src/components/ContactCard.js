import React from "react";
import { Link } from "react-router-dom";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contactValue;
  console.log(props);
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <Link to= { { pathname: '/contact/${id}', state:{contact: props.contactValue }}   }>
          <div className="header">{name}</div>
          <div>{email}</div>
        </Link>
        <i
          className="trash alternate outline  icon "
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => props.clickHandler(id)}
          key={props.contactValue.id}
        ></i>
      </div>
    </div>
  );
};

export default ContactCard;
