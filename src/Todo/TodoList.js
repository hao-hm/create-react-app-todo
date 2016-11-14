import React, {Component} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {
  renderItems(){
    return this.props.todos.map(todo => <TodoItem key={todo.id}/>)
  }
  render() {
    return (
      <ul className="Todo-list">
        Todo List
        {this.renderItems()}
      </ul>
    )
  }
}

export default TodoList;