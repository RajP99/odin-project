import React, { Component } from "react";
import EditMode from "./components/EditMode"

class App extends Component {
  constructor() {
    super();

    this.state = {
      editMode: true,
      details: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      }
    }
  }

  edit = () => {
    this.setState({
      editMode: true
    })
  }
  preview = () => {
    this.setState({
      editMode: false
    })
  }

  setFirstName = (e) => {
    const personal = this.state.details;
    // const firstName = e.target.value;
    personal.firstName = e.target.value;
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

  setPhone = (e) => {
    const personal = this.state.details;
    const phone = e.target.value;
    personal.phone = phone;
    this.setState({
      details: personal
    })
  }

  render() {
    const { editMode, personalDetails } = this.state;
    let curr = null;
    if (editMode) {
      curr = <EditMode
        details = {this.state.details}
        setFirstName = {() => {this.setFirstName()}}
        setLastName = {() => {this.setLastName()}}
        setEmail = {() => {this.setEmail()}}
        setPhone = {() => {this.setPhone()}}
      ></EditMode>
    }

    return (
      <div>
        <button onClick={this.edit}>Edit Mode</button>
        <button onClick={this.preview}>Preview Mode</button>
        <div>{curr}</div>
      </div>
    )
  }

  
}

export default App;