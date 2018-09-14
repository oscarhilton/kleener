import React, { Component } from "react";
import PropTypes from "prop-types";

export default class SimpleInput extends Component {
  constructor() {
    super();
    this.state = { input: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({ input: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ input: "" });
    this.props.handleSubmit(this.state.input);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input className="ant-input" placeholder={placeholder} onChange={this.handleChange} value={this.state.input} />
      </form>
    );
  }
}

SimpleInput.propTypes = {
  placeholder: PropTypes.string,
  handleSubmit: PropTypes.func,
};
