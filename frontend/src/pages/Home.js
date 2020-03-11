import React, { Component } from "react";
import NavHome from "../components/nav/NavHome";
import { MDBBox, MDBContainer } from 'mdbreact';
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
            <body className="Homed" style={{ paddingTop:"0px", paddingBottom:"0px"}}>
                
                <NavHome />

                <MDBContainer fluid>
                        Content here -->
                </MDBContainer>
                <h1 className="global_title_1">Welcome on Supply'Impact {this.data.name} !</h1>

                <MDBBox display="inline" >
                    <MDBBox display="block">
                        <MDBBox display="inline" bgColor="primary">
                            nombre de fournisseur : {this.data.nbFourn}
                        </MDBBox>
                        <MDBBox display="inline">
                            nombre de produits : {this.data.nbProd}
                        </MDBBox>
                    </MDBBox>
                    <MDBBox display="block" color="red">
                        camembert stat produits
                    </MDBBox>
                </MDBBox>
                <MDBBox display="inline">
                    caroussel dernier produits add
                </MDBBox>

                
            </body>
        );
    }
}
