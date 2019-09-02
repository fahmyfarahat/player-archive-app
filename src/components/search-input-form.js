import React, { Component } from "react";
import PropTypes from "prop-types";
import {Form, InputGroup, FormControl, Button} from "react-bootstrap";
import SectionWrapper from "./section-wrapper";

class SearchInputForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  };

  handleOnchange = e => {
    const inputValue = e.target.value;
    this.setState({inputValue});
  };
  
  handleOnSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    this.props.onSubmit(this.state.inputValue);
  };

  render() {
    const { buttonText, placeholder, name } = this.props;
    const { inputValue } = this.state;

    return (
      <SectionWrapper className="searchInput-section">
        <Form onSubmit={this.handleOnSubmit}>
          <InputGroup className="mb-3">
            <FormControl
              value={inputValue}
              size="lg"
              type="text"
              onChange={this.handleOnchange}
              placeholder={placeholder} 
              name={name}
            />
            <InputGroup.Append>
              <Button type="submit" size="lg">{buttonText}</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form>
      </SectionWrapper>
    )
  }
}

SearchInputForm.propTypes = {
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchInputForm;