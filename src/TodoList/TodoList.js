import React, { Fragment, Component } from "react";
import Todo from "../Todo/Todo";
import "./TodoList.css";

import NewTodo from "../NewTodo";
import Divider from "../Divider";

class TodoList extends Component {
  constructor(props) {
    super(props);
    const [item1, item2, ...rest] = [
      "Write some code",
      "Change the world",
      "Take a nap",
      "Eat a cookie"
    ];
    this.state = {
      items: [item1, item2, rest.join(" and ")]
    };
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }
  addTodo(item) {
    this.setState({ items: [...this.state.items, item] });
  }
  removeTodo(removeItem) {
    const filteredItems = this.state.items.filter(description => {
      return description !== removeItem;
    });
    this.setState({ items: filteredItems });
  }
  renderItems() {
    return this.state.items.map(description => (
      <Fragment key={"item-" + description}>
        <Todo
          key={description}
          description={description}
          removeTodo={this.removeTodo}
        />
        <Divider key={"divide-" + description} />
      </Fragment>
    ));
  }
  render() {
    return (
      <div className="TodoList">
        <NewTodo addTodo={this.addTodo} />
        {this.renderItems()}
      </div>
    );
  }
}

export default TodoList;
