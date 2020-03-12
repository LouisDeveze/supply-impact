import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { Pie } from "react-chartjs-2";
import { MDBBox, MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBCardGroup,MDBCardBody } from 'mdbreact';
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
    state = {
        dataPie: {
          labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
          datasets: [
            {
              data: [300, 50, 100, 40, 120],
              backgroundColor: [
                "#F7464A",
                "#46BFBD",
                "#FDB45C",
                "#949FB1",
                "#4D5360",
                "#AC64AD"
              ],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
                "#616774",
                "#DA92DB"
              ]
            }
          ]
        }
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
                                            <MDBCard className="card-bodyd" style={{ width: "100%", marginTop: "1rem" }}>
                                                <MDBCardBody>
                                                    <MDBCardTitle>Nombre de Fournisseurs</MDBCardTitle>
                                                    <MDBCardText>
                                                        {this.data.nbFourn}
                                                    </MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol sm="6">
                                            <MDBCard className="card-bodyd" style={{ width: "100%", marginTop: "1rem" }}>
                                                <MDBCardBody>
                                                    <MDBCardTitle>Nombre de Produits</MDBCardTitle>
                                                    <MDBCardText>
                                                        {this.data.nbProd}
                                                    </MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                </MDBRow>
                                <MDBRow >

                                <MDBCol sm="12">
                                    <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                        <MDBCardTitle>camembert stat produits</MDBCardTitle>
                                        <MDBCardText>

                                            <Pie data={this.state.dataPie} options={{ responsive: true }} />
                                        </MDBCardText>
                                    </MDBCard>
                                </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard className="card-body" style={{ height:"100%", marginTop: "1rem", overflow:"hidden" }}>
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
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
                                            <p>d</p>
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
