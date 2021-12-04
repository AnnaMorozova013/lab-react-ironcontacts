import "./App.css";
import allContacts from "./contacts.json";
import React, { useState } from "react";

function App() {

  //display 5 first elements
  const [contacts, setContacts] = useState(allContacts.slice(0, 5))

  const randomContact = () => {
    const newContact = allContacts[Math.floor(Math.random() * allContacts.length)]
    const isIncluded = contacts.find((contact) => newContact.name === contact.name)
    if (!isIncluded) setContacts([...contacts, newContact])
    else randomContact();
  }

  return <div className="app">
    <table className="table">
      <h1> IronContacts </h1>
      <button className="button" onClick={randomContact}> Add contact </button>
      <tr>
        <th>Picture</th>
        <th>Name</th>
        <th>Popularity</th>
        <th>Won Oscar</th>
        <th>Won Emmy</th>
      </tr>

      {contacts.map(contact => {
        return (

          <tr>
            <td><img src={contact.pictureUrl} style={{ width: '80px' }} alt='' /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
            <td>{contact.wonOscar === true && <p>🏆 </p>}</td>
            <td>{contact.wonEmmy === true && <p>🏆 </p>}</td>
          </tr>
        )
      })}
    </table>

  </div>;
}

export default App;