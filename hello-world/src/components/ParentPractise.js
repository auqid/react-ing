import React, { Component } from "react";
import ChildPractise from "./ChildPractise";

class ParentPractise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }
  greetParent(childName) {
    alert(`hello ${this.state.parentName} ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildPractise greetHandler={this.greetParent}></ChildPractise>
      </div>
    );
  }
}

export default ParentPractise;
