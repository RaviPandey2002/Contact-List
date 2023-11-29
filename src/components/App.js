import React from "react";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
  const contacts = [
    {
      id: 1,
      "name": "Dipesh",
      "email": "dipesh@gmail.com",
    },
    {
      id: 2,
      "name": "Bipesh",
      "email": "bipesh@gmail.com",
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList  contacts = {contacts} /> 
    </div>
  );
}

export default App;


// Sending Values from the parent to the childen throung Props