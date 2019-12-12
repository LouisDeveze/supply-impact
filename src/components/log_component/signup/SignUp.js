import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { MDBRow, MDBBtn, MDBContainer } from "mdbreact";

class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email_company: null,
      phone: null,
      siret: null,
      country: null,
      region: null,
      town: null,
      zip_code: null,
      adress: null,
      company_name: null,
      fillial: null,
      password: null,
      confirm_password: null,
      message: null
    }
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <MDBContainer className="main" alignItem="center">
        <form 
          className="signup"
          onSubmit={this.submitHandler}
          noValidate>
        <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Email Company
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
              Phone
            </label>
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="Phone"
              placeholder="Phone"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Siret
            </label>
            <input
              value={this.state.email}
              onChange={this.changeHandler}
              type="number"
              placeholder="N° Siret"
              required>
            </input>
          </div>
          </MDBRow>
          <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Country
            </label>
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="text"
              placeholder="Country"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Region
            </label>
            <input
              value={this.state.email}
              onChange={this.changeHandler}
              type="text"
              placeholder="Region"
              required>
            </input>
          </div>
          </MDBRow>
          <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Town
            </label>
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="text"
              placeholder="Town"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              ZIP Code
            </label>
            <input
              value={this.state.email}
              onChange={this.changeHandler}
              type="text"
              placeholder="number"
              required>
            </input>
          </div>
          </MDBRow>
          <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Adress
            </label>
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="text"
              placeholder="Adress"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Company Name
            </label>
            <input
              value={this.state.email}
              onChange={this.changeHandler}
              type="text"
              placeholder="Name of the Company"
              required>
            </input>
          </div>
          </MDBRow>
          <MDBRow>
          <div>
            <label
              htmlFor="defaultFormRegisterNameEx"
              className="grey-text">
              Fillial
            </label>
            <input
              value={this.state.password}
              onChange={this.changeHandler}
              type="text"
              placeholder="Fillial"
              required>
            </input>
          </div>
        </MDBRow>
        <MDBBtn color="primary" type="submit">
            Create
        </MDBBtn>
        </form>
      </MDBContainer>
    );
  }
}

export default SignUp;