import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { Pie } from "react-chartjs-2";
import { MDBBox, MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBCardGroup,MDBCardBody,MDBScrollbar,
    MDBCarousel, MDBCarouselInner, MDBCarouselItem,MDBView  } from 'mdbreact';
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
            <div className="Pages" style={{width: "100%", height:"100%", paddingTop:"0px", paddingBottom:"0px"}}>
                <div className="site-content">
                    <NavHome />

                    <h1 className="global_title_1">Welcome on Supply'Impact {this.data.name} !</h1>

                    <MDBContainer fluid  style={{ height:"100%"}} >
                        <MDBRow >
                            <MDBCol sm="6">
                                <MDBRow >
                                        <MDBCol sm="6">
                                            <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                                                <MDBCardBody>
                                                    <MDBCardTitle>Nombre de Fournisseurs</MDBCardTitle>
                                                    <MDBCardText>
                                                        {this.data.nbFourn}
                                                    </MDBCardText>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>

                                        <MDBCol sm="6">
                                            <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
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
                                        <MDBCardTitle>Statistiques de mes produits</MDBCardTitle>
                                        <MDBCardText>

                                            <Pie data={this.state.dataPie} options={{ responsive: true }} />
                                        </MDBCardText>
                                    </MDBCard>
                                </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard className="card-body overflow-auto" style={{ height:"100%", marginTop: "1rem", overflow:"hidden" }}>
                                    <MDBCardTitle>Mes derniers produits ajoutés</MDBCardTitle>
                                    <MDBCarousel
                                        activeItem={1}
                                        length={3}
                                        showControls={true}
                                        showIndicators={true}
                                        className="z-depth-1"
                                        
                                    >
                                        <MDBCarouselInner>
                                        <MDBCarouselItem itemId="1">
                                            <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                                                alt="First slide"
                                            />
                                            </MDBView>
                                        </MDBCarouselItem>
                                        <MDBCarouselItem itemId="2">
                                            <MDBView>
                                            <img
                                                className="d-block w-100"
                                                src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                                                alt="Second slide"
                                            />
                                            </MDBView>
                                        </MDBCarouselItem>
                                            <MDBCarouselItem itemId="3">
                                                <MDBView>
                                                <img
                                                    className="d-block w-100"
                                                    src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                                                    alt="Third slide"
                                                />
                                                </MDBView>
                                            </MDBCarouselItem>
                                        </MDBCarouselInner>
                                    </MDBCarousel>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                

                
               

            </div>
        );
    }
}
