import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Button } from "./components/Button/Button.jsx";
import { Input } from "./components/Input/Input.jsx";

import "./App.css";
import "./components/Button/Button.css";
/* import { evaluate } from 'mathjs'; */

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      previosNumber: "",
      currentNumber: "",
      operator: "",
    };
  }
  addToInput = (val) => {
    this.setState({ input: this.state.input + val });
    console.dir(this.state.input);
  };
  addZerroToInput = (val) => {
    if (this.state.input !== "") {
      this.setState({ input: this.state.input + val });
    }
  };
  addDecimal = (val) => {
    if (this.state.input.indexOf(".") === -1) {
      this.setState({ input: this.state.input + val });
    }
  };
  add = () => {
    this.state.previosNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "plus";
  };
  evaluate = () => {
    this.state.currentNumber = this.state.input;
    if (this.state.operator == "plus") {
      this.setState({
        input:
          parseInt(this.state.previosNumber) +
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "substract") {
      this.setState({
        input:
          parseInt(this.state.previosNumber) -
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "multiply") {
      this.setState({
        input:
          parseInt(this.state.previosNumber) *
          parseInt(this.state.currentNumber),
      });
    } else if (this.state.operator == "divide") {
      this.setState({
        input:
          parseInt(this.state.previosNumber) /
          parseInt(this.state.currentNumber),
      });
    }
  };
  substract = () => {
    this.state.previosNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "substract";
  };
  multiply = () => {
    this.state.previosNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "multiply";
  };
  divide = () => {
    this.state.previosNumber = this.state.input;
    this.setState({ input: "" });
    this.state.operator = "divide";
  };
  /* handleEqual = () => {
    this.setState({ input: evaluate(this.state.input) });
  }; */
  handleBackButton = () => {
    this.setState({
      input: this.state.input.slice(0, this.state.input.length - 1),
    });
  };
  handlePercent = () => {};
  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Input input={this.state.input}></Input>
          <div className="row">
            <Button handleClick={() => this.setState({ input: "" })}>AC</Button>
            <Button handleClick={this.handleBackButton}>&#9003;</Button>
            <Button handleClick={this.handlePercent}>%</Button>
            <Button handleClick={this.divide}>/</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
            <Button handleClick={this.multiply}>*</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
            <Button handleClick={this.substract}>-</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
            <Button handleClick={this.add}>+</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addDecimal}>.</Button>
            <Button handleClick={this.addZerroToInput}>0</Button>

            <Button handleClick={this.evaluate}>=</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("root"));
