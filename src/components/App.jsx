import React, { Component } from 'react';
import ContactForm from './Contactform/ContactForm';
import ContactList from './Contactlist/Contactlist';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  componentDidMount() {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.setState({ contacts: JSON.parse(storedContacts) });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts && 
        this.state.contacts.length >= prevState.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }
  

  handleAddContact = (newContact) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, newContact]
    }));
  }

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
  }

  handleDeleteContact = (contactId) => {
    const updatedContacts = this.state.contacts.filter(contact => contact.id !== contactId);
    this.setState({ contacts: updatedContacts });
   
  }
  
  
  
  
  getFilteredContacts() {
    return this.state.contacts.filter((contact) => (
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    ));
  }

  render() {
    return ( 
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={this.state.contacts} onAddContact={this.handleAddContact} />

        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onFilterChange={this.handleFilterChange} />
        <ContactList contacts={this.getFilteredContacts()} onDeleteContact={this.handleDeleteContact} />
      </div>
    );
  }
}

export default App;

