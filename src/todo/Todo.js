import React, {Component} from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
let todos = [
  {
    id: 'todo1',
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    id: 'todo2',
    task: 'eat dinner',
    isCompleted: true
  }
];
class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    }
  }
  render() {
    return (
      <div className="Todo-app">
        <TodoCreate />
        <TodoList todos={this.state.todos}/>
      </div>
    )
  }
}

export default Todo;