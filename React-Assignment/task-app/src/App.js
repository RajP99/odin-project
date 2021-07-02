import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: ''},
      tasks: []
    }
  }

  getTaskText = (e) => {
    this.setState({
      task: e.target.value,
    })
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: '' },
    });
  }

  render() {
    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter Task:</label>
          <input type="text" id="taskInput"></input>
          <button type="submit">Submit Task</button>
        </form>
      </div>
    );
  }
}

export default App;