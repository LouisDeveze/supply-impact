import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { MDBRow, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";

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
      <MDBContainer className="main">
        <MDBIcon icon="user-alt" />
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
          </MDBRow>
          <MDBRow>
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
        <MDBBtn color="secondary" type="submit">
            Create a Supplier Account
        </MDBBtn>
        <MDBBtn color="secondary" type="submit">
            Create a Distributor Account
        </MDBBtn>
        </form>
      </MDBContainer>
    );
  }
}

export default Login;