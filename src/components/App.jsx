import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import styles from './App.module.css';

const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <div className={styles.mainContainer}>
      <h2>Phonebook</h2>
      <ContactForm />
      {contacts.length > 0 ? (
        <>
          <h2>Contacts</h2>
          <ContactList />
        </>
      ) : (
        <h3>No contacts yet</h3>
      )}
    </div>
  );
};

export default App;