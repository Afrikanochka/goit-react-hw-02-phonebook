import React, {Component} from 'react';
import ContactForm from './contactForm/ContactForm';

class App extends Component {
    state = { 
        contacts: [],
          filter: '',
          name: '',
          number: '',
     }

     formHandleSubmit = ({ name, number}) => {
         
         const {contacts} = this.state;
         if (contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase(),
         )) {
            alert(`${name} is already in contacts.`);
         } else {
             this.setState(({contacts}) => {
                 return {
                     contacts: [...contacts, {name, number}]
                 };
             });
         }

     };

    render() {
        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.formHandleSubmit} />
                <h2>Contacts</h2>
            </div>
        );
    }
}

export default App;

