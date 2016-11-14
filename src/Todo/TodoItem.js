import React, {Component} from 'react';

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
    // This binding is necessary to make `this` work in the callback
    this.onEditClick = this.onEditClick.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  renderTodo() {
    const {todo} = this.props;
    const style = {
      textDecoration: todo.isCompleted ? 'line-through' : 'none'
    };
    if (this.state.isEditing) {
      return (
        <form onSubmit={this.handleUpdate}>
          <input type="text" defaultValue={todo.task} ref="editTodo"/>
          <button onClick={this.handleUpdate}>Update</button>
          <button onClick={this.handleCancel}>Cancel</button>
        </form>
      )
    }
    return (
      <span className="Todo-task" style={style} onClick={this.handleToggle}>{todo.task}</span>
    )
  }

  renderAction() {
    if (this.state.isEditing) {
      return;
    }
    return (
      <span>
        <button onClick={this.onEditClick}>Edit</button>
        <button onClick={this.handleDelete}>Delete</button>
      </span>
    )
  }

  render() {
    return (
      <li className="Todo-item">
        {this.renderTodo()}
        {this.renderAction()}
      </li>
    )
  }

  onEditClick() {
    this.setState({isEditing: true})
  }

  handleCancel(e) {
    e.preventDefault();
    this.setState({isEditing: false})
  }

  handleToggle() {
    const {onToggle, index, todo} = this.props;
    onToggle(index, todo);
  }

  handleDelete() {
    const {onDelete, index} = this.props;
    onDelete(index);
  }

  handleUpdate(e) {
    e.preventDefault();
    const {onUpdate, index} = this.props;
    const newTodo = {
      task: this.refs.editTodo.value,
      isCompleted: false
    };
    onUpdate(index, newTodo);
    this.setState({isEditing: false})
  }
}

export default TodoItem;