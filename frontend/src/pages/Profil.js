import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { Pie } from "react-chartjs-2";
import { MDBBox, MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBBtn  } from 'mdbreact';
import "./pages.css"

export default class Profil extends Component {
    constructor(props) {
      super(props);
      this.data = {
        name : "Alex",
        nbProd : 50,
        nbFourn : 70
      };
    }
   
    
    render() {
        return (
            <div className="Home" style={{width: "100%", height:"100%", paddingTop:"0px", paddingBottom:"0px"}}>
                <div className="site-content">
                    <NavHome />

                    <h1 className="global_title_1">My Profil ({this.data.name})</h1>

                    <MDBContainer fluid  style={{ height:"100%"}} >
                        <MDBRow >
                            <MDBCol sm="6">
                                
                                <MDBRow >
                                    <MDBCol sm="12">

                                        <h2> Infos </h2>
                                        <p>Nom : {this.data.name}</p>
                                        <p>Nom : {this.data.name}</p>
                                        <p>Adress : {this.data.name}</p>
                                        <p>Nm de siret : {this.data.name}</p>
                                        

                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >

                                    <MDBCol sm="12">
                                        <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                            <MDBCardTitle>Changement du mot de passe</MDBCardTitle>
                                            <form>
                                                <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
                                                Old password
                                                </label>
                                                <input type="email" id="defaultFormRegisterConfirmEx" className="form-control" />
                                                <br />
                                                <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
                                                New password
                                                </label>
                                                <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
                                                <div className="text-center mt-4">
                                                <MDBBtn color="unique" type="submit">
                                                    Submit
                                                </MDBBtn>
                                                </div>
                                            </form>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                    <MDBCardTitle>PP</MDBCardTitle>
                                    <MDBCardText>
                                        <img src="https://mdbootstrap.com/img/Photos/Avatars/img(31).jpg" className="img-fluid z-depth-1 rounded-circle " alt="" />
                                        <p>d</p>
                                        <p>d</p>
                                    </MDBCardText>
                                </MDBCard>

                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                    
                </div>
                
            </div>
        );
    }
}
