import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { MDBBox, MDBContainer,MDBCard,MDBCardTitle,MDBCardText,MDBRow,MDBCol, MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import "./pages.css"

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
                                            <td>Otto</td>
                                            <td>@mdo</td>
                                            <td>delete</td>
                                        </tr>
                                        <tr>
                                            <td>name2</td>
                                            <td>sup</td>
                                            <td>Thornton</td>
                                            <td>@fat</td>
                                            <td>delete</td>
                                        </tr>
                                        <tr>
                                            <td>name3</td>
                                            <td>sup</td>
                                            <td>the Bird</td>
                                            <td>@twitter</td>
                                            <td>delete</td>
                                        </tr>
                                    </MDBTableBody>
                                </MDBTable>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </div> 
        </div>
     );
    }
}
