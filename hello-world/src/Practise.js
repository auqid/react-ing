import React, { Component } from "react";

class Practise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "helloooo",
      count: 0,
      loggedIn: false,
    };
    this.changeMessage = this.changeMessage.bind(this);
  }
  changeMessage() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
      name: "byebye",
    }));
  }

  render() {
    const { name } = this.props;
    return (
      <div>
        {name}
        {this.state.name}
        <button onClick={this.changeMessage}>click</button>
        Counter - {this.state.count}
      </div>
    );
  }
}
export default Practise;
