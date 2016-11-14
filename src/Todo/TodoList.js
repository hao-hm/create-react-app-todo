import React, {Component} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  renderItems() {
    let {todos, ...props} = this.props;
    return todos.map((todo, index) => <TodoItem key={index} index={index} todo={todo} {...props}/>)
  }

  render() {
    return (
      <ul className="Todo-list">
        {this.renderItems()}
      </ul>
    )
  }
}

export default TodoList;