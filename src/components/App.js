import { link } from 'react-router-dom'
import { BrowserRouter  as Router, Switch , Routes, Route } from "react-router-dom";
import React, {useState, useEffect} from "react";
import { v4 as uuid_v4 } from "uuid";
import "./App.css";
import Header from "./Header";
import ContactList from "./ContactList";
import AddContact from "./AddContact";

function App() {
    // const val = "VALUE_from_AppJs";
  
  const LOCAL_STORAGE_KEY = "contacts";
  // const [contacts, setContacts] = useState([]);

  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  // useEffect(()=>{
  //   const retriveContacts = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) );
  //   if(retriveContacts) setContacts(retriveContacts);
  //   console.log(retriveContacts);
  // },[]);
  

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, {id: uuid_v4(), ...contact}]);
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
        return (contact.id !== id)
    });

    setContacts(newContactList);  
  };
  

  // useEffect(()=>{
  //   localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  // },[contacts]);

  
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);
  
  return (
    <div className="ui container">
      <Router>
      <Header />
      <Routes>
      <Route path="/add" element={<AddContact />}  />
      <Route path="/" element={<ContactList />}  />
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={removeContactHandler} /> */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;

{/* <div className="ui container center" style={{textAlign:"center"}}> <h2>Contact-List</h2></div> */}

// Sending Values from the parent to the childen through Props