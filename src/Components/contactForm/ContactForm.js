import {Component} from 'react';
import PropTypes from "prop-types";

class ContactForm extends Component {
    state = { 
        name: '',
        number: '',
     }

     handleChange = (e) => {
        const { name, value } = e.currentTarget;
    
        this.setState({ [name]: value });
      };

     handleSubmit = (e) => {
        e.preventDefault();
    
        this.props.onSubmit(this.state);
    
        this.setState({ name: '', number: '' });
      };
    

    render() {
        const {name, number} = this.state;
        return (
            <form className="form" onSubmit={this.handleSubmit} >
                <label htmlFor="name" className="label">
                <input
                 value={name}
                 onChange={this.handleChange}
                 placeholder="Имя Фамилия"
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                 required
/>
                </label>
                <label htmlFor="number" className="label">
                <input
                 value={number}
                 onChange={this.handleChange}
                 placeholder="111-11-11"
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                 required
/>
                </label>
                <button className="button" type="submit" >Add contact</button>
            </form>
        );
    }
}

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

export default ContactForm;