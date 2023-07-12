import React, { Component } from "react";

export default class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome ",
      button: "click me",
    };
  }
  changeMessage() {
    this.setState({
      message: "thanks for subbing",
      button: "damn you click hard",
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>
          {this.state.button}
        </button>
      </div>
    );
  }
}
