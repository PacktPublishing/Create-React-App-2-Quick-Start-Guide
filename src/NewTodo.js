import React, { Component } from "react";
import "./NewTodo.css";

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = { item: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  addTodo() {
    this.props.addTodo(this.state.item);
    this.setState({ item: "" });
  }
  handleUpdate(event) {
    this.setState({ item: event.target.value });
  }
  render() {
    return (
      <div className="NewTodo">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.item}
        />
        &nbsp;&nbsp;
        <button onClick={this.addTodo}>Add</button>
      </div>
    );
  }
}

export default NewTodo;
