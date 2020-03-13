import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import {  MDBTable, MDBTableBody, MDBTableHead,  MDBBtn,MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol,MDBInput } from 'mdbreact';
import "./pages.css"
import informationButton from "../img/informationButton.png";

export default class Suppliers extends Component {
    constructor(props) {
      super(props);

    }
 
    render() {
        return (

            <div className="Pages" style={{width: "100%", height:"100%", paddingTop:"0px", paddingBottom:"0px"}}>
                <div className="site-content">
                    <NavHome />

                    <h1 className="global_title_1">My suppliers</h1>

                    <MDBContainer fluid  style={{ height:"100%"}} >
                        <MDBRow >
                            <MDBCol sm="6">
                                <MDBRow >
                                    <input className="form-control" type="text" placeholder="Search" aria-label="Search"  style={{width:"50%", marginLeft:"15px"}}/>
                                </MDBRow>
                                <MDBRow >

                                <MDBCol sm="12">
                                    <MDBCard className="card-body" style={{ width: "100%", height:"100%", marginTop: "1rem" }}>
                                        <MDBCardTitle>All my suppliers</MDBCardTitle>
                                        <MDBCardText>

                                        <MDBRow >
                                            <MDBCol>
                                                <MDBCard className="card-body" style={{ width: "100%", marginTop: "1rem" }}>
                                                    <MDBTable>
                                                        <MDBTableHead>
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Quantity</th>
                                                                <th>More Information</th>
                                                            </tr>
                                                        </MDBTableHead>
                                                        <MDBTableBody>
                                                            <tr>
                                                                <td>name1</td>
                                                                <td>5</td>
                                                                <td><a href="google.com"><img src={informationButton} alt="information'button" style={{ width: "30px" }}></img></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>name2</td>
                                                                <td>2</td>
                                                                <td><a href="google.com"><img src={informationButton} alt="information'button" style={{ width: "30px" }}></img></a></td>
                                                            </tr>
                                                            <tr>
                                                                <td>name3</td>
                                                                <td>10</td>
                                                                <td><a href="google.com"><img src={informationButton} alt="information'button" style={{ width: "30px" }}></img></a></td>
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
                                <MDBRow>
                                <MDBCard className="card-body overflow-auto" style={{ height:"100%", marginTop: "1rem", overflow:"hidden" }}>
                                    <MDBCardTitle>New supplier</MDBCardTitle>
                                    <form>
                                        <div className="grey-text">
                                        <MDBInput label="Enter an email" icon="envelope" group type="email" validate error="wrong"
                                            success="right" />
                                        </div>
                                        <div className="text-center">
                                        <MDBBtn color="primary">Add supplier</MDBBtn>
                                        </div>
                                    </form>
                                </MDBCard>
                                </MDBRow>
                                <MDBRow>
                                    <MDBCard className="card-body overflow-auto" style={{ height:"100%", marginTop: "1rem", overflow:"hidden" }}>
                                        <MDBCardTitle>Information about the selected supplier</MDBCardTitle>
                                            <div>
                                                <p> BLABLABLBABLALABLABLA</p>
                                            </div>
                                            <div style={{display:"inline-block"}}>
                                                <MDBBtn color="light-green">Contact</MDBBtn>
                                                <MDBBtn color="deep-orange">Delete</MDBBtn>
                                            </div>
                                    </MDBCard>
                                </MDBRow>
                            </MDBCol>
                        </MDBRow>
                    </MDBContainer>
                </div>
                

                
               

            </div>




        );
    }
}
