import React, { Component } from "react";
import axios from 'axios';
//import { Link } from "react-router-dom";
import { MDBRow, MDBCard, MDBBtn, MDBContainer } from "mdbreact";

const API_URL = 'http://localhost:3000/';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      message: null,

      admin: [],
      users: [],
    }
  }

  async componentDidMount() {
    var admins = [];
    const res = await axios.get(API_URL+"admin")
        admins = res.data;
        console.log(admins)
        this.setState({admin : admins})
  }

  submitHandler() {
    console.log("Email : " + this.state.email)
    console.log("Password : " + this.state.password)
  }

  changeHandler = (type, e) => {
    switch (type) {
      case 'email':
        this.setState({email: e.target.value});
        console.log("email " + this.state.email)
        break;
      case 'password':
        this.setState({password: e.target.value});
        console.log("password " + this.state.password)
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <MDBContainer className="d-flex 
                              justify-content-center 
                              align-self-center
                              flex_column">
        <MDBCard className="d-flex
                            justify-content-center
                            align-self-center">
        <h1 className="align-self-center">Login</h1>
        <form 
          className="login"
          onSubmit={this.submitHandler}
          noValidate>
        <MDBRow className="justify-content-center">
          <div>
            <label
              htmlFor="defaultFormRegisterName"
              className="grey-text">
              Email
            </label>
            <input
              value={this.state.email}
              onChange={(e) => this.changeHandler('email',e)}
              type="email"
              placeholder="Email"
              required>
            </input>
          </div>
          </MDBRow>
          <MDBRow className="justify-content-center">
          <div>
            <label
              htmlFor="defaultFormRegisterPassword"
              className="grey-text">
              Password
            </label>
            <input
              value={this.state.password}
              onChange={(e) => this.changeHandler('password',e)}
              type="password"
              placeholder="Password"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBBtn color="primary" onClick={this.submitHandler}>
            Connect
        </MDBBtn>
        <MDBBtn color="secondary" onClick={this.submitHandler}>
            Create an Account
        </MDBBtn>
        </form>
        </MDBCard>
      </MDBContainer>
    );
  }
}

export default Login;