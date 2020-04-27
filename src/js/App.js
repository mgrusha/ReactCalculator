import React, { Component } from "react";
import ReactDOM from "react-dom";
import Calculator from "./Calculator";
import { HexCalc, BinCalc, DecCalc } from "./CalcTypes";

function App() {
  return (
    <Calculators>
      <Calculator type={new BinCalc()} />
      <Calculator type={new DecCalc()} />
      <Calculator type={new HexCalc()} />
    </Calculators>
  );
}

class Calculators extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <main className="container mt-4">{this.props.children}</main>;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
