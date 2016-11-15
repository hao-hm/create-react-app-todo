import React, {Component} from 'react';

class TodoCreate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errorMsg: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  renderError() {
    if (!this.state.errorMsg) { return null; }

    return <div style={{ color: 'red' }}>{this.state.errorMsg}</div>;
  }

  render() {
    return (
      <form className="Todo-create" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="What do I need to do?" value={this.state.value} onChange={this.handleChange}/>
        <button>Create</button>
        {this.renderError()}
      </form>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const {onCreate} = this.props;
    const value = this.state.value;
    const validateInput = this.validateInput(value);
    if (validateInput) {
      this.setState({errorMsg: validateInput});
      return;
    }
    const newTodo = {
      task: this.state.value,
      isCompleted: false
    };
    onCreate(newTodo);
    this.setState({value: '', errorMsg: ''});
  }

  handleChange(e) {
    const value = e.target.value;
    const errorMsg = this.validateInput(value);
    this.setState({value, errorMsg});
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task.';
    } else {
      return null;
    }
  }
}

export default TodoCreate;