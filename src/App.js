import React, { Component } from "react";
import shortid from "shortid";
import ContactList from "./Components/ContactList/ContactList";
import ContactForm from "./Components/ContactForm/ContactForm";
import Filter from "./Components/Filter/Filter";
import { SpanNoContactsMsg } from "./App.styled";

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addNewContact = (newItem) => {
    const contact = {
      id: shortid.generate(),
      name: newItem.name,
      number: newItem.number,
    };

    this.setState((prevState) => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  findFilterValue = (e) => {
    this.setState({
      filter: e.target.value,
    });
  };

  deleteContact = (name) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((pers) => pers.name !== name),
    }));
  };

  render() {
    const normalizeFilter = this.state.filter.toLowerCase();
    const filterCurrentTel = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          filterContact={filterCurrentTel}
          onAdd={this.addNewContact}
        />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilter={this.findFilterValue} />
        {this.state.contacts.length === 0 ? (
          <SpanNoContactsMsg> No contacts</SpanNoContactsMsg>
        ) : (
          <ContactList
            contacts={filterCurrentTel}
            onDeleteContact={this.deleteContact}
          />
        )}
      </div>
    );
  }
}

export default App;
