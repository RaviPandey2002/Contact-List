import React from "react";

const ContactList = (props) => {
  // console.log(props);
  // console.log(props.contacts[0]);

  const renderContactList = props.contacts.map(( contact  )=> {
    // It is returning a jsx object and mapping it to each contact list item.
    return (
      <div className="item">
        <div className="content">
          <div className="header">{contact.name}</div>
          <div>{contact.email}</div>
          <i className="trash alternate outline icon "></i>
        </div>
      </div>
    );
  });

  // const val = arr.map(logic);

  return (
    // console.log(renderContactList), just logs the jsx (react-element) that is returnd as a value.
    <div className="ui celled list">
      {renderContactList}
    </div>
    
  );
};
export default ContactList;
