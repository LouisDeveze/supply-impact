import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      message: null
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <div className = "main">
        <form 
          className="login"
          onSubmit={this.submitHandler}
          noValidate>
        <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={this.changeHandler}
              type="email"
              placeholder="Email"
              required>
            </input>
          </div>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="password"
              placeholder="Password"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBBtn color="primary" type="submit">
            Connect
        </MDBBtn>
        </form>
      </div>
    );
  }
}

export default Login;