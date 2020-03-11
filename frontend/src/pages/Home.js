import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { MDBBox, MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol } from 'mdbreact';
import "./pages.css"

export default class Home extends Component {
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

                    <h1 className="global_title_1">Welcome on Supply'Impact {this.data.name} !</h1>

                    <MDBContainer fluid  style={{ height:"100%"}} >
                        <MDBRow >
                            <MDBCol sm="6">
                                <MDBRow >
                                    <MDBCol sm="6">
                                            <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                                            <MDBCardTitle>Nombre de Fournisseurs</MDBCardTitle>
                                            <MDBCardText>
                                                {this.data.nbFourn}
                                            </MDBCardText>
                                        </MDBCard>
                                    </MDBCol>

                                    <MDBCol sm="6">
                                        <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                                            <MDBCardTitle>Nombre de Produits</MDBCardTitle>
                                            <MDBCardText>
                                                {this.data.nbProd}
                                            </MDBCardText>
                                        </MDBCard>
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow >

                                <MDBCol sm="12">
                                    <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                        <MDBCardTitle>camembert stat produits</MDBCardTitle>
                                        <MDBCardText>
                                            flexf
                                            
                                            <p>d</p>
                                            <p>d</p>
                                        </MDBCardText>
                                    </MDBCard>
                                </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                    <MDBCardTitle>caroussel dernier produits add</MDBCardTitle>
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
