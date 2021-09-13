import { Component } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import { LabelFind } from "./Filter.styled";

class Filter extends Component {
  inputFilterId = shortid.generate();

  render() {
    return (
      <LabelFind htmlFor={this.inputFilterId}>
        Find contacts by name
        <input
          onChange={this.props.onFilter}
          type="text"
          value={this.props.filter}
          id={this.inputFilterId}
        />
      </LabelFind>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string,
  onFilter: PropTypes.func,
};

export default Filter;
