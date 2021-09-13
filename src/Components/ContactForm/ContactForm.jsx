import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import {
  FormWrap,
  LabelName,
  LabelTel,
  ButtonAddcontact,
} from "./ContactForm.styled";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  inputNameId = shortid.generate();
  inputTelId = shortid.generate();

  findCurrentValue = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  addContact = (e) => {
    e.preventDefault();
    this.props.filterContact.find(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    )
      ? alert(`${this.state.name} is already in contacts`)
      : this.props.onAdd(this.state);
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.addContact}>
        <FormWrap>
          <LabelName htmlFor={this.inputNameId}>
            Name
            <input
              onChange={this.findCurrentValue}
              value={this.state.name}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              id={this.inputNameId}
            />
          </LabelName>
          <LabelTel htmlFor={this.inputTelId}>
            Number
            <input
              onChange={this.findCurrentValue}
              value={this.state.number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              id={this.inputTelId}
            />
          </LabelTel>
          <ButtonAddcontact type="submit">Add contact</ButtonAddcontact>
        </FormWrap>
      </form>
    );
  }
}

ContactForm.propTypes = {
  filterContact: PropTypes.array,
  onAdd: PropTypes.func,
};

export default ContactForm;
