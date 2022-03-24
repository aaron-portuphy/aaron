import React from "react";
import "../styles.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

export default function App() {
  const contacts = [
    {
      id: "1",
      name: "Aaron",
      email: "aaronportuphy@gmail.com"
    },
    {
      id: "2",
      name: "Gieon",
      email: "giedonportuphy@gmail.com"
    }
  ];
  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList contacts={contacts} />
    </div>
  );
}
