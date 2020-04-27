import React, { Component } from "react";

export default class InputField extends React.Component {
  render() {
    return (
      <input
        className="display-number__value active"
        value={this.props.value}
        onChange={this.props.action}
        maxLength="1"
      />
    );
  }
}
