import { Link } from "react-router-dom";
import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  // console.log(props.contacts[0]);
  // It is returning a jsx object and mapping it to each contact list item.
  // const val = arr.map(logic);

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  };

  const contacts = [
    {
      id: "1",
      name: "dipeshD",
      email: "none",
    },
  ];

  const renderContactList = contacts.map((contact) => {
    return (
      <ContactCard
        contactValue={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });

  return (
    // console.log(renderContactList), just logs the jsx (react-element) that is returnd as a value.
    <div class="main ">
      <h2>
        Contact List
        <Link to="/add">
        <button class="ui inverted blue right button">Add Contact</button>
        </Link>
      </h2>
      <div className="ui celled list ">{renderContactList}</div>
    </div>
  );
};
export default ContactList;

/*
import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  // console.log(props.contacts[0]);

  // It is a function to render diffrent contactCard components.
  // const val = arr.map(logic); arr = {props.contacts}, map (logic)
  // It is returning a jsx object and mapping it to each contact list item.
  const renderContactList = props.contacts.map(( contact  ) => {
    return (
      <ContactCard contact="contact" ></ContactCard>
    );
  });

  // const showValue = (props) => {
  //   return (
  //     <div>
  //       This is give the combination of diffrent div's
  //       {props.val}
  //     </div>
  //   );
  // };


  return (
    // console.log(renderContactList), just logs the jsx (react-element) that is returnd as a value.
      //<div>{showValue}</div>
    <div className="ui celled list">
      {renderContactList}      
    </div>
    
  );
};
export default ContactList;
*/
