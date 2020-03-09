import React, { Component } from "react";
import logo from "../../img/logo.png";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav,
     MDBNavbarToggler, MDBCollapse, MDBNavItem, 
     MDBIcon, MDBDropdown, MDBDropdownToggle,MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';


class EditorNav extends Component {
    constructor(props) {
        super(props);
        this.user_id = "User_To_Get";
        this.state = {
            collapse: false
        };
        this.toggleCollapse.bind(this);
    }

    toggleCollapse = () => {
    this.setState({ collapse: !this.state.collapse });
    }


    render() {
        return(
            <header>
                <MDBNavbar color="elegant-color-dark" dark expand="md" style={{paddingTop:"0px", paddingBottom:"0px"}}>
                <MDBNavbarBrand href="/">
                    <strong><img src={logo} alt="Supply'Impact logo" style={{ width: "30px" }}></img></strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={ this.toggleCollapse} />
                <MDBCollapse isOpen = { this.state.collapse } navbar>

                    <MDBNavbarNav left color="white">

                        <MDBNavItem>
                            <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Fichier
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="#!">Enregistrer</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Exporter</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavItem>

                        <MDBNavItem>
                        <MDBDropdown>
                                <MDBDropdownToggle nav caret>
                                    Ajouter
                                </MDBDropdownToggle>
                                <MDBDropdownMenu className="dropdown-default">
                                <MDBDropdownItem href="#!">Entrée</MDBDropdownItem>
                                <MDBDropdownItem divider />
                                <MDBDropdownItem href="#!">Transport</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Stockage</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Transformation</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Production</MDBDropdownItem>
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
                                <MDBDropdownItem href="#!">DashBoard</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Account</MDBDropdownItem>
                                <MDBDropdownItem href="#!">Change User</MDBDropdownItem>
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
export default EditorNav;
