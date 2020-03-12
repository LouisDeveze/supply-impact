import React, { Component } from "react";

import logo from "../../img/logo.png";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
     MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, 
     MDBIcon, MDBDropdown, MDBDropdownToggle,MDBDropdownMenu, MDBDropdownItem,
     MDBPopover, MDBPopoverBody, MDBPopoverHeader } from 'mdbreact';
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
                            <MDBNavLink to="/Home">Home</MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Mes listes
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="/MyProducts">Mes Produits</MDBDropdownItem>
                                <MDBDropdownItem href="/RawMaterials">Matière Première</MDBDropdownItem>
                                <MDBDropdownItem href="/Suppliers">Fournisseurs</MDBDropdownItem>
                                <MDBDropdownItem href="/Distributors">Distributeurs</MDBDropdownItem>
                                <MDBDropdownItem href="/Subcontractors">Sous Traitants</MDBDropdownItem>
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

                                <MDBPopover
                                placement="left"
                                container="ancestor"
                                popover
                                clickable
                                id="popper4"
                                >
                                    <MDBDropdownItem href="#!"><MDBIcon icon="circle" fixed /> Notifications</MDBDropdownItem>
                                    <div style={{  }} >
                                        <MDBPopoverHeader>Notifications</MDBPopoverHeader>
                                        <MDBPopoverBody>
                                            1er Notification
                                        </MDBPopoverBody>
                                    </div>
                                </MDBPopover>


                             

                                <MDBDropdownItem href="/Profil"><MDBIcon icon="user" fixed /> Profil/Account</MDBDropdownItem>
                                <MDBDropdownItem href="#!"><MDBIcon icon="cog" fixed />  Settings</MDBDropdownItem>
                                <MDBDropdownItem href="#!"><MDBIcon icon="sign-out-alt" fixed /> Logout</MDBDropdownItem>
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
