import React, { Component } from "react";

import logo from "../../img/logo.png";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
     MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, 
     MDBIcon, MDBDropdown, MDBDropdownToggle,MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';





class NavHome extends Component {
    constructor(props) {
        super(props);
        this.user_id = "User_to_get";
        this.navRef = null;
        this.state = {
        showModal: false
        };
    }
    state = {
    isOpen: false
    };

    toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
    }


    render() {
    
        
        return(
            <header>
                <MDBNavbar color="indigo" dark expand="md"  style={{paddingTop:"0px", paddingBottom:"0px"}}>
                <MDBNavbarBrand href="/">
                    <strong><img src={logo} alt="Supply'Impact logo" style={{ width: "30px" }}></img></strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.onClick } />
                <MDBCollapse isOpen = { this.state.collapse } navbar>
                    <MDBNavbarNav left>
                        <MDBNavItem active>
                            <MDBNavLink to="/home">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Mes listes
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="#!">Mes Produits</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Matière Première</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Fournisseurs</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Distributeurs</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Sous Traitants</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>
                    </MDBNavbarNav>


                    <MDBNavbarNav right>

                        <MDBNavItem >
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" />
                                </MDBDropdownToggle>
                                <MDBDropdownMenu right basic className="dropdown-default">
                                <MDBDropdownItem href="#!">Notifications</MDBDropdownItem>
                                <MDBDropdownItem href="/profil">Profil/Account</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Logout</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>

                    </MDBNavbarNav>
                </MDBCollapse>
                </MDBNavbar>
            </header>
        );
    }
}
export default NavHome;
