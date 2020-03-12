import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { Pie } from "react-chartjs-2";
import { MDBBox, MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol } from 'mdbreact';
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
                                        <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                                            <MDBCardTitle>Infos</MDBCardTitle>
                                            <MDBCardText>
                                                {this.data.nbFourn}
                                            </MDBCardText>
                                        </MDBCard>

                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >

                                    <MDBCol sm="12">
                                        <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                            <MDBCardTitle>MDP</MDBCardTitle>
                                            <MDBCardText>

                                            </MDBCardText>
                                        </MDBCard>
                                    </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                    <MDBCardTitle>PP</MDBCardTitle>
                                    <MDBCardText>
                                        caroussel
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
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
