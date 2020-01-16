import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import "./login.css";
import Home from "./home";
import { withRouter } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  nameError: "",
  emailError: "",
  passwordError: ""
};
class login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  validate = () => {
    let nameError = "";
    let emailError = "";
    let passwordError = "";

    if (!this.state.name) {
      nameError = "name cannot be blank";
    }

    if (!this.state.email.includes("@")) {
      emailError = "invalid email";
    }
    if (!this.state.password) {
      passwordError = "password cannot be blank";
    }

    if (emailError || nameError || passwordError) {
      this.setState({ emailError, nameError, passwordError });
      return false;
    }

    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      // clear form
       this.setState(initialState);
       this.props.history.push("/home");
    }
  };
  // handleClick = () => {
  //   this.props.history.push("/home");
  // };
  render() {
    const { username, password } = this.state;
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Login</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="fullName">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.nameError}
              </div>
            </div>
            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.emailError}
              </div>
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
              <div style={{ fontSize: 12, color: "red" }}>
                {this.state.passwordError}
              </div>
            </div>
            <div className="submit">
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(login);
