import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      editMode: true,
      details = {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }
    }
  }

  setFirstName = (e) => {
    const personal = this.state.details;
    const firstName = e.target.value;
    personal.firstName = firstName;
    this.setState({
      details: personal
    })
  }

  setLastName = (e) => {
    const personal = this.state.details;
    const lastName = e.target.value;
    personal.lastName = lastName;
    this.setState({
      details: personal
    })
  }

  setEmail = (e) => {
    const personal = this.state.details;
    const email = e.target.value;
    personal.email = email;
    this.setState({
      details: personal
    })
  }

  setlastName = (e) => {
    const personal = this.state.details;
    const phone = e.target.value;
    personal.phone = phone;
    this.setState({
      details: personal
    })
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