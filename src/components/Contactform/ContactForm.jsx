import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
class ContactForm extends Component {
  state = {
    name: '',
    number: ''
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const { contacts, onAddContact } = this.props;
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase());
    if (existingContact) {
      const {name,number} = this.state;
      alert(`${name} and ${number} already exists in your contacts.`);
      this.setState({name:''});
      this.setState({number:''});
      return;
    }
  
    const newContact = { id: nanoid(), name, number };
    onAddContact(newContact);
    this.setState({ name: '', number: '' });
  }
  

  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label className={css.label} htmlFor="name">Name :</label>
        <input className={css.border} type="text" name="name" value={name} onChange={this.handleInputChange} />

        <label className={css.label} htmlFor="number">Number :</label>
        <input  className={css.border} type="text" name="number" value={number} onChange={this.handleInputChange} />

        <button className={css.btn} type="submit">Add Contact</button>
      </form>
    )
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  })).isRequired,
  onAddContact: PropTypes.func.isRequired,
};
export default ContactForm;
