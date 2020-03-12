import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { MDBContainer,MDBCard,MDBRow,MDBCol, MDBTable, MDBTableBody, MDBTableHead,  MDBBtn, MDBProgress} from 'mdbreact';
import "./pages.css"
import playButton from "../img/playButton.png";

export default class Subcontractors extends Component {
    constructor(props) {
      super(props);

    }
 
    render() {
        return (
            <div className="Pages">
                <div>
                    <NavHome />
                    <h1 className="global_title_1">Subcontractors</h1>
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
                                            <th>Name of Distri</th>
                                            <th>Nb Product</th>
                                            <th>Edit</th>
                                        </tr>
                                    </MDBTableHead>
                                    <MDBTableBody>
                                        <tr>
                                            <td>name1</td>
                                            <td>nom1,2,3</td>
                                            <td>5</td>
                                            <td><MDBBtn outline color="danger">Delete</MDBBtn></td>
                                        </tr>
                                        <tr>
                                            
                                            <td>name2</td>
                                            <td>nom1,2,3</td>
                                            <td>5</td>
                                            <td><MDBBtn outline color="danger">Delete</MDBBtn></td>
                                        </tr>
                                        <tr>
                                            
                                            <td>name3</td>
                                            <td>nom1,2,3</td>
                                            <td>5</td>
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
