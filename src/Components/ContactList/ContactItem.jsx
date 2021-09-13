import { Component } from "react";
import PropTypes from "prop-types";
import { ContactListItem, ButtonDelete, Name, Tel } from "./ContactItem.styled";

class ContactItem extends Component {
  render() {
    return (
      <ContactListItem>
        <Name>{`${this.props.name}:`}</Name>
        <Tel>{this.props.number}</Tel>
        <ButtonDelete
          type="submit"
          onClick={() => this.props.onDeleteNumber(this.props.name)}
        >
          Delete
        </ButtonDelete>
      </ContactListItem>
    );
  }
}

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  onDeleteNumber: PropTypes.func,
};

export default ContactItem;
