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
    this.submitHandler = this.submitHandler.bind(this);
    this.checkUser = this.checkUser.bind(this);
  }

  async componentDidMount() {
    const res = await axios.get(API_URL+"admin")
        this.setState({admin : res.data})
        console.log(this.state.admin)
    const res2 = await axios.get(API_URL+"users")
        this.setState({users : res2.data})
        console.log(this.state.users)
  }

  /*
    Clicking the Connect button send the state email and password
  */
  submitHandler() {
    console.log("Email : " + this.state.email)
    console.log("Password : " + this.state.password)

    this.state.admin.forEach(x => console.log(x._id))
    this.state.users.forEach(x => console.log(x._id))

    if(this.checkUser()) {
      console.log("True")
    } else {
      console.log("False")
    }

  }
  /*
    Check if the admin or the user does exist
    return True or False
  */
  checkUser() {
    let doesExit = false
      this.state.admin.forEach(x => {
        if(x.email === this.state.email) {
          doesExit = true;
        }
      });
      return doesExit;
  }

  /*
    Update the state email and password in the form
  */
  changeHandler = (type, e) => {
    switch (type) {
      case 'email':
        this.setState({email: e.target.value});
        break;
      case 'password':
        this.setState({password: e.target.value});
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