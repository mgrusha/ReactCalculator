import React, { Component } from "react";

export default class ClickField extends React.Component {
  render() {
    return (
      <span
        className="display-number__value active"
        onClick={this.props.action}
      >
        {this.props.children}
      </span>
    );
  }
}
