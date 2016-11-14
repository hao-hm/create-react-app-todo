import React, {Component} from 'react';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';
import './Todo.css';

let todos = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'eat dinner',
    isCompleted: true
  }
];
class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos
    };
    this.toggleTodo = this.toggleTodo.bind(this);
    this.createTodo = this.createTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }
  render() {
    return (
      <div className="Todo-app">
        <TodoCreate onCreate={this.createTodo}/>
        <TodoList
          todos={this.state.todos}
          onToggle={this.toggleTodo}
          onUpdate={this.updateTodo}
          onDelete={this.deleteTodo}
        />
      </div>
    )
  }

  toggleTodo(index){
    let {todos} = this.state,
      todo = todos[index];
    todo.isCompleted = !todo.isCompleted;
    this.setState({todos});
  }

  createTodo(todo){
    let {todos} = this.state;
    todos.push(todo);
    this.setState({todos});
  }

  updateTodo(index, newTodo){
    let {todos} = this.state;
    todos[index] = newTodo;
    this.setState({todos});
  }

  deleteTodo(index){
    let {todos} = this.state;
    todos.splice(index, 1);
    this.setState({todos});
  }
}

export default Todo;