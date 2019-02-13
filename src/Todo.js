import React, { Component } from "react";
import "./Todo.css";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
    this.markAsDone = this.markAsDone.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  markAsDone() {
    this.setState({ done: true });
  }
  removeTodo() {
    this.props.removeTodo(this.props.description);
  }
  cssClasses() {
    let classes = ["Todo"];
    if (this.state.done) {
      classes = [...classes, "Done"];
    }
    return classes.join(" ");
  }
  render() {
    return (
      <div className={this.cssClasses()}>
        {this.props.description}
        <br />
        <button className="MarkDone" onClick={this.markAsDone}>
          Mark as Done
        </button>
        <button className="RemoveTodo" onClick={this.removeTodo}>
          Remove Me
        </button>
      </div>
    );
  }
}

export default Todo;
