import React, { Component } from 'react';
import ContactListItem from '../Contactlistitem/Contaclistitem';
import PropTypes from 'prop-types';
class ContactList extends Component {
  render() {
    const { props } = this;
    return (
      <ul>
        {props.contacts.map((contact) => (
          <ContactListItem
            key={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={() => props.onDeleteContact(contact.id)}
          />
        ))}
      </ul>
    );
  }
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
