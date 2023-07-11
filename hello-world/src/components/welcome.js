import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class!! and {this.props.name} and {this.props.children}
      </h1>
    );
  }
}

export default Welcome;
