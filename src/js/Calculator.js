import React, { Component } from "react";
import ReactDOM from "react-dom";
import GroupNumber from "./GroupNumber";
import CardHeader from "./CardHeader";
import { CalcType, HexCalc, BinCalc, DecCalc } from "./CalcTypes";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type;
    this.result = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.createNumbers = this.createNumbers.bind(this);
    this.handleEventFirstArray = this.handleEventFirstArray.bind(this);
    this.handleEventSecondArray = this.handleEventSecondArray.bind(this);
    this.state = {
      firstArray: [0, 0, 0, 0, 0, 0, 0, 0],
      secondArray: [0, 0, 0, 0, 0, 0, 0, 0],
    };
  }

  createNumbers = () => {
    let groupNubmerHolder = [];
    this.result = this.type.add(this.state.firstArray, this.state.secondArray);
    for (
      let elementNumber = 0;
      elementNumber < this.result.length;
      elementNumber++
    ) {
      groupNubmerHolder.push(
        <GroupNumber
          key={elementNumber}
          firstArrayValue={this.state.firstArray[elementNumber]}
          secondArrayValue={this.state.secondArray[elementNumber]}
          resultValue={this.result[elementNumber]}
          position={elementNumber}
          firstArrayChange={this.handleEventFirstArray}
          secondArrayChange={this.handleEventSecondArray}
          contenteditable={this.type.contenteditable}
          checkNumber={this.type.checkNumber}
        />
      );
    }
    return groupNubmerHolder;
  };

  handleEventFirstArray(value, position) {
    let newStateArray = [...this.state.firstArray];
    newStateArray[position] = value;
    this.setState({ firstArray: newStateArray });
  }

  handleEventSecondArray(value, position) {
    let newStateArray = [...this.state.secondArray];
    newStateArray[position] = value;
    this.setState({ secondArray: newStateArray });
  }

  render() {
    return (
      <section>
        <div className="card">
          <CardHeader type={this.type} />

          <div className="card-body">
            <form className="binary-calculator">
              {this.createNumbers()}
              <div className="operator-bar">
                <span> + </span>
                <div className="tooltip">
                  Aby dodać, kliknij!
                  <div className="chatBubbleArrowBorder"></div>
                  <div className="chatBubbleArrow"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
