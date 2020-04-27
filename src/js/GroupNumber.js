import React, { Component } from "react";
import InputField from "./InputField";
import ClickField from "./ClickField";

class GroupNumber extends React.Component {
  constructor(props) {
    super(props);
    this.firstArrayChange = this.firstArrayChange.bind(this);
    this.secondArrayChange = this.secondArrayChange.bind(this);
    this.firstArrayValueSet = this.firstArrayValueSet.bind(this);
    this.secondArrayValueSet = this.secondArrayValueSet.bind(this);
  }

  firstArrayChange(e) {
    this.props.firstArrayChange(
      this.props.firstArrayValue == 1 ? 0 : 1,
      this.props.position
    );
  }

  secondArrayChange(e) {
    this.props.secondArrayChange(
      this.props.secondArrayValue == 1 ? 0 : 1,
      this.props.position
    );
  }

  firstArrayValueSet(e) {
    if (this.props.checkNumber(e.target.value)) {
      this.props.firstArrayChange(e.target.value, this.props.position);
    }
  }

  secondArrayValueSet(e) {
    if (this.props.checkNumber(e.target.value)) {
      this.props.secondArrayChange(e.target.value, this.props.position);
    }
  }

  render() {
    return (
      <div className="group-number">
        <label className="display display-number">
          {this.props.contenteditable ? (
            <InputField
              value={this.props.firstArrayValue}
              action={this.firstArrayValueSet}
            />
          ) : (
            <ClickField action={this.firstArrayChange}>
              {this.props.firstArrayValue}
            </ClickField>
          )}
        </label>

        <label className="display display-number">
          {this.props.contenteditable ? (
            <InputField
              value={this.props.secondArrayValue}
              action={this.secondArrayValueSet}
            />
          ) : (
            <ClickField action={this.secondArrayChange}>
              {this.props.secondArrayValue}
            </ClickField>
          )}
        </label>

        <span className="result result-bit">
          <span className="display-number__value active">
            {this.props.resultValue}
          </span>
        </span>
      </div>
    );
  }
}

export default GroupNumber;
