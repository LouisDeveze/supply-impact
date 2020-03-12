import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { MDBContainer,MDBCard,MDBRow,MDBCol, MDBTable, MDBTableBody, MDBTableHead,  MDBBtn, MDBProgress} from 'mdbreact';
import "./pages.css"
import playButton from "../img/playButton.png";

export default class MyProducts extends Component {
    constructor(props) {
      super(props);

    }
 
    render() {
        return (
            <div className="MyProducts">
                <div>
                    <NavHome />
                    <h1 className="global_title_1">My Products</h1>
                    <MDBCol md="6">
                        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
                    </MDBCol>
                    <MDBContainer fluid  style={{ height:"100%"}} >
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
                    <MDBBtn color="primary" style={{float:"right"}}>Add</MDBBtn>
                </MDBContainer>             
            </div> 
        </div>
     );
    }
}
