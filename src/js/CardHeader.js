import React, { Component } from "react";

export default class CardHeader extends React.Component {
  render() {
    return (
      <div className="card-header">
        <h5 className="card-title">{this.props.type.name}</h5>
        <h6 className="card-subtitle text-muted">{this.props.type.rule}</h6>
      </div>
    );
  }
}
