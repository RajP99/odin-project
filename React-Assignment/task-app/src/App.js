import React, { Component } from "react";
import Overview from "./components/Overview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '',
              id: uniqid()
            },
      tasks: []
    }
  }

  getTaskText = (e) => {
    this.setState({
      task: {
        text: e.target.value,
        id: this.state.task.id
      },
    })
  }

  addTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { 
        text: '',
        id: uniqid()
      },
    });
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div>
        <form onSubmit={this.addTask}>
          <label htmlFor="taskInput">Enter Task:</label>
          <input onChange={this.getTaskText} value={task.text} type="text" id="taskInput"></input>
          <button type="submit">Submit Task</button>
        </form>
        <Overview tasks={tasks}></Overview>
      </div>
    );
  }
}

export default App;