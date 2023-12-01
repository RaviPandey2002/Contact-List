Components=> functional & class components

UI sementics => library for frontend.

Sending Values from the parent to the childen throung Props.

Js engine create an object as props and place it inside the child with the values/properties that are passed down to the child from its parent. Hence, later on which can be use by the child with '.' dot operator
Now days we use react hooks to passing data with the refrences { useState } in react.

We can use pass data from child also with the fuction and props.

{
this.props.addContactHandler(this.state); => For passing date from child to parent
this.setState({name:"", email:""}); -> clearing the state after clicking on the add button
}

{
const [contacts, setContacts] = useState([]); => In order to set the state of the data [contacts_array] we always need the setContacts in order to change the state of the array_contact
}

useState => It is used to share data.

useEffect => in order to access the local storage =>For the current session only.

{
const LOCAL_STORAGE_KEY= "contacts";
useEffect(()=>{
localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
},[contacts])
}

-> For retrive & persist data put into
{
    useEffect(()=>{
    const retriveContacts = JSON.parse( localStorage.getItem(LOCAL_STORAGE_KEY) );
    if(retriveContacts) setContacts(retriveContacts);
     },[]);
}

removing stored contacts
{
    const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
        return contact.id !== id;
    })
    
    setContacts(newContactList);  
  }
}

The one of the basic ways to pass down the data from the child to the parent or from the parent to the child is with the help of props.

In order to use Routing we use->
import { BrowserRouter  as Router, Switch , Route } from "react-router-dom";

{
  <Router>
  Place all the components which has to routed inside this tag.
  </Router>
}

*** The documentation have been changed a lot various component elements;

