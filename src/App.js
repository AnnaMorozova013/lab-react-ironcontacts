import "./App.css";
import allContacts from "./contacts.json";
import React, { useState } from "react";

function App() {

  //display 5 first elements
  const [contacts, setContacts] = useState(allContacts.slice(0, 5))

  return <div className="App">
    <table>
      <h1> IronContacts </h1>
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
            <td><img src={contact.pictureUrl} style={{width: '80px'}} alt=''/></td>
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