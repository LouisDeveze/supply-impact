import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import {  MDBTable, MDBTableBody, MDBTableHead,  MDBBtn, MDBProgress,MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBCardGroup,MDBCardBody,MDBScrollbar,
    MDBCarousel, MDBCarouselInner, MDBCarouselItem,MDBView } from 'mdbreact';
import "./pages.css"
import playButton from "../img/playButton.png";

export default class Suppliers extends Component {
    constructor(props) {
      super(props);

    }
 
    render() {
        return (

            <div className="Pages" style={{width: "100%", height:"100%", paddingTop:"0px", paddingBottom:"0px"}}>
                <div className="site-content">
                    <NavHome />

                    <h1 className="global_title_1">Welcome on Supply'Impact !</h1>

                    <MDBContainer fluid  style={{ height:"100%"}} >
                        <MDBRow >
                            <MDBCol sm="6">
                                <MDBRow >
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                                </MDBRow>
                                <MDBRow >

                                <MDBCol sm="12">
                                    <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                        <MDBCardTitle>Statistiques de mes produits</MDBCardTitle>
                                        <MDBCardText>

                                        <MDBRow >
                                            <MDBCol>
                                                <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                                                    <MDBTable>
                                                        <MDBTableHead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Supplier</th>
                                                                <th>GotoProcess</th>
                                                                <th>Status</th>
                                                                <th>Edit</th>
                                                            </tr>
                                                        </MDBTableHead>
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td>name1</td>
                                                                <td>sup</td>
                                                                <td><a href="google.com"><img src={playButton} alt="play'button" style={{ width: "30px" }}></img></a></td>
                                                                <td> <MDBProgress value={70} className="my-2" /></td>
                                                                <td><MDBBtn outline color="danger">Delete</MDBBtn></td>
                                                            </tr>
                                                            <tr>
                                                                <td>name2</td>
                                                                <td>sup</td>
                                                                <td><a href="google.com"><img src={playButton} alt="play'button" style={{ width: "30px" }}></img></a></td>
                                                                <td> <MDBProgress value={30} className="my-2" /></td>
                                                                <td><MDBBtn outline color="danger">Delete</MDBBtn></td>
                                                            </tr>
                                                            <tr>
                                                                <td>name3</td>
                                                                <td>sup</td>
                                                                <td><a href="google.com"><img src={playButton} alt="play'button" style={{ width: "30px" }}></img></a></td>
                                                                <td> <MDBProgress value={50} className="my-2" /></td>
                                                                <td><MDBBtn outline color="danger">Delete</MDBBtn></td>
                                                            </tr>
                                                        </MDBTableBody>
                                                    </MDBTable>
                                                </MDBCard>
                                            </MDBCol>
                                        </MDBRow> 
                                        </MDBCardText>
                                    </MDBCard>
                                </MDBCol>
                                    
                                </MDBRow>
                            </MDBCol>

                            <MDBCol sm="6">
                                <MDBCard className="card-body overflow-auto" style={{ height:"100%", marginTop: "1rem", overflow:"hidden" }}>
                                    <MDBCardTitle>Add fournisseur</MDBCardTitle>
                                   
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                

                
               

            </div>




        );
    }
}
